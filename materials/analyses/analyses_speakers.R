##Analysis Code for Nordmeyer & Frank
##"Negation is only hard to process when it is pragmatically infelicitous"
##Speaker Condition

##Load Libraries
library(dplyr)
library(ggplot2)
library(lme4)
library(bootstrap)

##Functions
#for bootstrapping 95% confidence intervals
theta <- function(x,xdata) {mean(xdata[x])}
ci.low <- function(x) {
  quantile(bootstrap(1:length(x),1000,theta,x)$thetastar,.025)}
ci.high <- function(x) {
  quantile(bootstrap(1:length(x),1000,theta,x)$thetastar,.975)}

#Plot style
plot.style <- plot.style <- theme_bw() + theme(panel.grid.minor=element_blank(), panel.grid.major=element_blank(), legend.position="right", axis.line = element_line(colour="black",size=.5), axis.ticks = element_line(size=.5), axis.title.x = element_text(vjust=-.5), axis.title.y = element_text(angle=90,vjust=0.25))

#####Preliminaries#####
##Load in speaker data
d.speakers <- read.csv("data/data_speakers.csv")
d.speakers$subid <- as.factor(d.speakers$subid)

##Recode Context
#Note: Context was initially coded as # of context characters with target item
#Recode as total # of characters (including referent) with target items 
d.speakers$recode.context <- paste(as.character(d.speakers$context.condition),"/4",sep = "")
d.speakers[d.speakers$trial.type == "item",]$recode.context <- paste(as.character(d.speakers[d.speakers$trial.type == "item",]$context.condition + 1),"/4",sep="")
d.speakers$recode.context <- factor(d.speakers$recode.context)

##Simplify coding scheme
#In the initial coding scheme, we had multiple codes:
#Several negation codes (empty, no, not, nothing, without, zero)
#Several positive codes ("othernoun" is descriptions of a noun other than the target noun, e.g. "Bob has a table")
#Several other codes ("body" is descriptions of the character's body, "clothing" is descriptions of the character's clothing)
#In the paper, we use a more conservative coding scheme, to strictly parallell the sentences seen in the listener condition
#Only instances of "no x" are coded as "negation"
#Only descriptions of the target objects are coded as "noun"
#Everything else is coded as "other"
d.speakers$code.cat <- "Other"
d.speakers[d.speakers$coding == "no",]$code.cat <- "Negation"
d.speakers[d.speakers$coding == "noun",]$code.cat <- "Noun"
d.speakers$code.cat <- factor(d.speakers$code.cat)

#####Plots#####

##Means by subject
ms <- rbind_list(
  d.speakers %>% 
    group_by(recode.context, trial.type, subid) %>%
    summarise(count = mean(code.cat == "Negation"), code.cat = "Negative"),
  d.speakers %>% 
    group_by(recode.context, trial.type, subid) %>%
    summarise(count = mean(code.cat == "Noun"), code.cat = "Positive")
) %>%
  group_by(recode.context, trial.type, code.cat) %>%
  summarise(m.cih = ci.high(count),
            m.cil = ci.low(count),
            m = mean(count))

names(ms) <- c("context","trial.type","sentence.type","m.cih","m.cil","m")
ms$sentence.type <- factor(ms$sentence.type, levels=c("Positive","Negative"))

##Plot Proportions
qplot(context, m, group = trial.type,
      ymin = m.cil, ymax = m.cih,
      col = trial.type,
      geom = c("line","linerange"),
      data = subset(ms, sentence.type == "Negative")) + 
  ylab("Probability of producing negation ('no X')") + 
  xlab("Context Condition") + 
  scale_colour_grey("Trial Type") + 
  #xlim(c(0,1)) +
  plot.style

##Plot surprisal
qplot(context, -log(m), group = sentence.type,
      ymin = -log(m.cil), ymax = -log(m.cih),
      col = sentence.type,
      geom = c("line","linerange"),
      data = subset(ms, (sentence.type == "Negative" & trial.type == "nothing") |
                    (sentence.type == "Positive" & trial.type == "item"))) + 
  ylab("Speaker Surprisal") + 
  xlab("Context Condition") + 
  scale_colour_grey("Response") + 
  #xlim(c(0,1)) +
  plot.style

#####Statistical Analyses#####

##Model effect of context & trial type on production of negation
d.speakers$dummy.context <- 0
d.speakers[d.speakers$recode.context == "0/4",]$dummy.context <- 1

d.speakers$negation <- 0
d.speakers[d.speakers$code.cat == "Negation",]$negation <- 1

d.speakers$numeric.context <- as.numeric(as.character(factor(d.speakers$recode.context, levels=c("0/4","1/4","2/4","3/4","4/4"), labels=c(0, .25, .5, .75, 1))))

model1 <- glmer(negation ~ numeric.context*trial.type + dummy.context
               + (1 |subid)
               + (1 |item),
               data=d.speakers, family = "binomial")
summary(model1)


##Just look at 1/4, 2/4, 3/4 on nothing trials
d.split <- filter(d.speakers, recode.context != "0/4" & trial.type == "nothing")

model2 <- glmer(negation ~ numeric.context
                + (1 | subid)
                + (1 | item),
                data=d.split, family = "binomial")
summary(model2)
