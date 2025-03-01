
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Brain, Heart, MessageCircle, Fingerprint, Activity, Moon, Sparkles } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Driven Analysis",
      description: "Our advanced AI analyzes your conversations to provide personalized insights and therapy approaches."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Emotional Intelligence",
      description: "MindSync understands emotional nuances and responds with empathy and appropriate therapeutic techniques."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Access therapeutic support anytime, anywhere—no appointments or waiting lists required."
    },
    {
      icon: <Fingerprint className="h-6 w-6" />,
      title: "Complete Privacy",
      description: "End-to-end encryption and stringent privacy measures ensure your conversations remain confidential."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Progress Tracking",
      description: "Monitor your mental health journey with detailed insights and personalized progress reports."
    },
    {
      icon: <Moon className="h-6 w-6" />,
      title: "Mindfulness Exercises",
      description: "Access guided meditations and breathing exercises to help manage stress and anxiety."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 relative">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-full bg-accent px-4 py-1.5 mb-6">
              <div className="flex items-center text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4 mr-1" />
                Why Choose MindSync
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Advanced Features for <span className="text-gradient">Better Mental Health</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              MindSync combines cutting-edge AI technology with evidence-based therapeutic approaches to deliver 
              personalized mental health support.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <AnimatedCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index}
            />
          ))}
        </div>
        
        <motion.div
          className="mt-20 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/10 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Personalized Mental Health Journey</h3>
              <p className="text-muted-foreground mb-6">
                MindSync learns from your interactions, adapting its approach to your unique needs. Our AI continuously 
                improves to provide increasingly personalized and effective support.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Evidence-based", "Personalized", "Adaptive", "Continuous Learning"].map((tag, index) => (
                  <span key={index} className="pill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-purple-700 p-1">
              <div className="bg-background rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <h4 className="font-medium">Your Wellness Journey</h4>
                </div>
                <div className="space-y-3">
                  {[80, 65, 75, 90].map((value, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {["Anxiety", "Stress", "Mood", "Overall Wellbeing"][index]}
                        </span>
                        <span className="font-medium">{value}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 * index }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
