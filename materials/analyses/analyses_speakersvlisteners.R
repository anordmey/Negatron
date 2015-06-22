##Analysis Code for Nordmeyer & Frank
##"Negation is only hard to process when it is pragmatically infelicitous"
##Comparing listeners & speakers


#####Load listener means#####
ms.listeners <- read.csv("data/data_listenermeans.csv")

#Only look at True sentences
ms.listeners <- ms.listeners[ms.listeners$truth.value == TRUE,]
ms.listeners <- ms.listeners[,c("context","sentence.type","rt","rt.cih","rt.cil")]

#####Load speaker means#####
ms.speakers <- read.csv("data/data_speakermeans.csv")

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

#####Plot#####
ggplot(data.ms, aes(color=sentence.type, y=rt, x=surprisal)) + 
  geom_pointrange(aes(ymin=rt.cil, ymax=rt.cih), size=.1) + 
  geom_errorbarh(aes(xmin=surprisal.cil, xmax=surprisal.cih), size=.1) + 	
  geom_point(aes(color=sentence.type)) + 
  geom_smooth(method="lm", lty="dotted", color="grey60", fill="grey90") + 
  geom_text(aes(label=data.ms$context), hjust=-0.1, vjust=0, size=3) +
  #annotate("text", x=-4, y=1725, label="r=.86", size=3.5) +
  #annotate("text", x=-3.3, y=1750, label="r=.94", size=3.5) +  
  #annotate("text", x=-4.3, y=1420, label="True Positive", color="#C77CFF", size=4) + 
  annotate("text", x=.95, y=1550, label="True Negative", color="grey50", size=4) + 
  #annotate("text", x=-3.6, y=1450, label="False Positive", color="#7CAE00", size=4) +
  annotate("text", x=.75, y=1100, label="True Positive", color="black", size=4) +  
  #facet_wrap(~ truthval, nrow=1) + 
  ylab("Listener Reaction Time (ms)") +  xlab("Speaker Surprisal") + 
  scale_colour_manual(values=c("black","grey50")) +
  theme_bw() + 
  theme(panel.grid.minor=element_blank(), panel.grid.major=element_blank(), legend.position="none")
