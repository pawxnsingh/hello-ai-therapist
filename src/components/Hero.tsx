
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, MessageSquare, Sparkles } from 'lucide-react';
import CircularButton from './CircularButton';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen pt-28 pb-16 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block rounded-full bg-accent px-4 py-1.5 mb-6">
                <div className="flex items-center text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4 mr-1" />
                  AI-Powered Mental Health Support
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Transform Your Mental Wellbeing with <span className="text-gradient">MindSync</span>
              </h1>
              
              <p className="mt-6 text-lg text-muted-foreground">
                Experience personalized therapy sessions powered by advanced AI. MindSync provides confidential, 
                accessible mental health support whenever you need it, wherever you are.
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/chat">
                <Button size="lg" className="rounded-full h-14 px-8">
                  Start Chatting Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8">
                Learn More
              </Button>
            </motion.div>
            
            <motion.div
              className="pt-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-gray-${(i+1)*100} to-gray-${(i+2)*100}`} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">10,000+</span> people already improving their mental health
              </p>
            </motion.div>
          </div>
          
          {/* Right side - Visual */}
          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main device mockup */}
            <div className="glass-panel rounded-3xl overflow-hidden shadow-xl p-4 max-w-md mx-auto">
              <div className="aspect-[9/16] bg-background rounded-xl overflow-hidden relative flex flex-col">
                {/* Mock chat interface */}
                <div className="flex-shrink-0 p-4 border-b bg-secondary">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <Brain className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">MindSync AI</p>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>
                </div>
                
                {/* Chat messages area */}
                <div className="flex-grow flex flex-col justify-end p-4 space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm">How are you feeling today?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm">I've been feeling a bit anxious about work lately.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm">I understand. Let's explore those feelings together. What specific aspects of work are causing you anxiety?</p>
                    </div>
                  </div>
                </div>
                
                {/* Input area */}
                <div className="flex-shrink-0 p-4 border-t">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="w-full rounded-full border-input bg-background px-4 py-2 text-sm"
                    />
                    <Button size="icon" className="absolute right-1 top-1 h-6 w-6 rounded-full">
                      <MessageSquare className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating action buttons around the device */}
            <div className="absolute -right-8 top-1/4">
              <CircularButton 
                icon={<Sparkles className="h-5 w-5" />} 
                label="Insights"
                variant="primary" 
              />
            </div>
            <div className="absolute -left-6 bottom-1/3">
              <CircularButton 
                icon={<MessageSquare className="h-5 w-5" />} 
                label="Therapy"
                variant="outline" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
