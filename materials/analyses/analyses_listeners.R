##Analysis Code for Nordmeyer & Frank
##"Negation is only hard to process when it is pragmatically infelicitous"
##Listener Condition

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

#load in listener data
d.listeners <- read.csv("../data/data_listeners.csv")
d.listeners$subid <- as.factor(d.listeners$subid)

##Remove people with less than 80% accuracy
propcorrect <- aggregate(correct~subid, data=d.listeners, mean)
reject <- propcorrect[propcorrect$correct < .8,]

for (i in reject$subid) {
	d.listeners<-d.listeners[d.listeners$subid != i,]
}

#Remove incorrect
d.listeners.c <- d.listeners[d.listeners$correct == 1,]

#LogRT
qplot(data=d.listeners.c, x=rt, geom="histogram")
d.listeners.c$log.rt<-log(d.listeners.c$rt)
qplot(data=d.listeners.c, x=log.rt, geom="histogram")

#trim outliers outside 3 standard deviations of the log mean
lrt <- d.listeners.c$log.rt
d.listeners.ct <- d.listeners.c[lrt < mean(lrt) + 3*sd(lrt) & lrt > mean(lrt) - 3*sd(lrt),]

qplot(data=d.listeners.ct, x=rt, geom = "histogram")
qplot(data=d.listeners.ct, x=log.rt, geom = "histogram")

##Recode Context
#Note: Context was initially coded as # of context characters with target item
#Recode as total # of characters (including referent) with target items 
tpresent <- d.listeners.ct %>%
  filter((text.condition == "positive" & response == TRUE) | 
           (text.condition == "negative" & response == FALSE)) %>%
  mutate(recode.context = paste(as.character((context.condition + 1)), "/4", sep=""))
  
tabsent <- d.listeners.ct %>%
  filter((text.condition == "negative" & response == TRUE) | 
           (text.condition == "positive" & response == FALSE)) %>%
  mutate(recode.context = paste(as.character(context.condition), "/4", sep=""))

d.listeners.ct <- rbind(tpresent, tabsent)

#####Plots#####

d.listeners.ct$text.condition <- factor(d.listeners.ct$text.condition,levels=c("positive","negative"), labels=c("Positive","Negative"))
d.listeners.ct$response <- factor(d.listeners.ct$response,levels=c("TRUE","FALSE"))
d.listeners.ct$recode.context <- as.factor(d.listeners.ct$recode.context)

#GGplot
mss <- aggregate(rt ~ text.condition + recode.context + response + subid, d.listeners.ct, mean) 
ms <- aggregate(rt ~ text.condition + recode.context + response, mss, mean)
ms$cih <- aggregate(rt ~ text.condition + recode.context + response, mss, ci.high)$rt
ms$cil <- aggregate(rt ~ text.condition + recode.context + response, mss, ci.low)$rt

names(ms) <- c("sentence.type","context","truth.value","rt","rt.cih","rt.cil")

#quartz()
ggplot(ms, aes(colour = sentence.type, y = rt, x = context)) +
  geom_line(aes(group = sentence.type), size = .5) +
  facet_wrap(~ truth.value, nrow = 1) +
  geom_linerange(aes(ymin = ms$rt.cil,ymax = ms$rt.cih), width = .25, size = .25, position = position_dodge(0.1)) +
  scale_y_continuous(name = "RT (ms)", breaks = seq(1000, 2000, 100)) + 
  xlab("Context Condition") + 
  scale_colour_grey("Sentence Type") + 
  plot.style


       
#####Statistical Analyses#####
d.listeners.ct$response <- factor(d.listeners.ct$response,levels = c("FALSE","TRUE"))
d.listeners.ct$context.ratio <- as.numeric(as.character(factor(d.listeners.ct$recode.context, 
                                                levels = c("0/4","1/4","2/4","3/4","4/4"),
                                                labels = c("0",".25",".5",".75","1"))))

model1 <- lmer(rt ~ text.condition*response*context.ratio
       + (text.condition |subid)
       + (text.condition |item),
       data = d.listeners.ct)
summary(model1)

