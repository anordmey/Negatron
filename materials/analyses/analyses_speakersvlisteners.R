##Analysis Code for Nordmeyer & Frank
##"Negation is only hard to process when it is pragmatically infelicitous"
##Comparing listeners & speakers

library(ggplot2)
library(grid)

##Plotting conventions
plot.style <- theme(panel.grid.minor=element_blank(), panel.grid.major=element_blank(), legend.position="none")


#####Load listener means#####
ms.listeners <- read.csv("../data/data_listenermeans.csv")

#Only look at True sentences
ms.listeners <- ms.listeners[ms.listeners$truth.value == TRUE,]
ms.listeners <- ms.listeners[,c("context","sentence.type","rt","rt.cih","rt.cil")]

#####Load speaker means#####
ms.speakers <- read.csv("../data/data_speakermeans.csv")

#Only look at true pos and true neg sentences
ms.speakers <- subset(ms.speakers, (sentence.type == "Negative" & trial.type == "nothing") |
                          (sentence.type == "Positive" & trial.type == "item"))

#Calculate surprisal
ms.speakers$surprisal <- -log(ms.speakers$m)
ms.speakers$surprisal.cih <- -log(ms.speakers$m.cih)
ms.speakers$surprisal.cil <- -log(ms.speakers$m.cil)

ms.speakers <- ms.speakers[,c("context","sentence.type","surprisal","surprisal.cih","surprisal.cil")]


#####Merge together#####

data.ms <- merge(ms.listeners, ms.speakers)


#####Correlation#####
cor.test(data.ms$rt, data.ms$surprisal)

data.trimmed <- subset(data.ms, context != "0/4")
cor.test(data.trimmed$rt, data.trimmed$surprisal)

#####Plot#####

##Plot all
p.all <- ggplot(data.ms, aes(color=sentence.type, y=rt, x=surprisal)) + 
  geom_pointrange(aes(ymin=rt.cil, ymax=rt.cih), size=.1) + 
  geom_errorbarh(aes(xmin=surprisal.cil, xmax=surprisal.cih), size=.1) + 	
  geom_point(aes(color=sentence.type)) + 
  geom_smooth(method="lm", lty="dotted", color="grey60", fill="grey90") + 
  geom_text(aes(label=data.ms$context), hjust=-0.1, vjust=0, size=3) +
  annotate("text", x=.5, y=1700, label="R^2 == .89", parse=TRUE, color="black", size=3.5) + 
  annotate("text", x=.65, y=1125, label="True Positive", color="grey50", size=3.5) + 
  annotate("text", x=1.25, y=1500, label="True Negative", color="black", size=3.5) +  
  ylab("Listener Reaction Time (ms)") +  xlab("Speaker Surprisal") + 
  scale_colour_manual(values=c("black","grey50")) +
  ylim(1000, 1800) +
  theme_bw() + 
  plot.style

##Plot with no outlier
p.trimmed <- ggplot(data.trimmed, aes(color=sentence.type, y=rt, x=surprisal)) + 
  geom_pointrange(aes(ymin=rt.cil, ymax=rt.cih), size=.1) + 
  geom_errorbarh(aes(xmin=surprisal.cil, xmax=surprisal.cih), size=.1) + 	
  geom_point(aes(color=sentence.type)) + 
  geom_smooth(method="lm", lty="dotted", color="grey60", fill="grey90") + 
  geom_text(aes(label=data.trimmed$context), hjust=-0.1, vjust=0, size=2) +
  annotate("text", x=.15, y=1450, label="R^2 == .89", parse=TRUE, color="black", size=2.5) + 
  #annotate("text", x=.15, y=1125, label="True Positive", color="grey50", size=3.5) + 
  #annotate("text", x=.72, y=1290, label="True Negative", color="black", size=3.5) +  
  ylab("RT (ms)") +  xlab("Surprisal") + 
  scale_colour_manual(values=c("black","grey50")) +
  #theme_bw() + 
  plot.style 

##Combine plot
vp <- viewport(width = 0.4, height = 0.4, x = .96,
               y = .17, just = c("right","bottom"))

full <- function(mainplot, subplot) {
  print(mainplot)
  theme_set(theme_bw(base_size = 8))
  print(subplot, vp = vp)
  theme_set(theme_bw())
}
#quartz()
full(p.all, p.trimmed)

##Plot both
ggplot(data.ms, aes(color=sentence.type, y=rt, x=surprisal)) + 
  geom_pointrange(aes(ymin=rt.cil, ymax=rt.cih), size=.1) + 
  geom_errorbarh(aes(xmin=surprisal.cil, xmax=surprisal.cih), size=.1) + 	
  geom_point(aes(color=sentence.type)) + 
  geom_smooth(method="lm", lty="dotted", color="grey60", fill="grey90") + 
  geom_smooth(data=data.trimmed, method="lm", lty="dotted", color="gray10", fill="gray30") + 
  geom_text(aes(label=data.ms$context), hjust=-0.1, vjust=0, size=3) +
  annotate("text", x=.2, y=1450, label="R^2 == .89", parse=TRUE, color="black", size=3.5) + 
  annotate("text", x=3, y=1700, label="R^2 == .89", parse=TRUE, color="black", size=3.5) + 
  annotate("text", x=.75, y=1125, label="True Positive", color="grey50", size=3.5) + 
  annotate("text", x=1.3, y=1500, label="True Negative", color="black", size=3.5) +  
  ylab("Listener Reaction Time (ms)") +  xlab("Speaker Surprisal") + 
  scale_colour_manual(values=c("black","grey50")) +
  theme_bw() + 
  theme(panel.grid.minor=element_blank(), panel.grid.major=element_blank(), legend.position="none")
