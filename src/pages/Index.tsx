
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, MessageCircle, Calendar, HeartPulse, Brain } from 'lucide-react';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');
      
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.body.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.body.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/10" />
        
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
                  <Brain className="h-4 w-4 mr-1" />
                  Seamless Experience
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                How <span className="text-gradient">MindSync</span> Works
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Experience therapeutic support that adapts to your needs through a simple, intuitive process.
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="h-6 w-6" />,
                title: "Chat Naturally",
                description: "Start a conversation with MindSync just like you would with a therapist. No forms to fill—just express yourself naturally."
              },
              {
                icon: <Brain className="h-6 w-6" />,
                title: "AI Analysis",
                description: "Our AI analyzes your language patterns, emotional cues, and context to understand your unique situation."
              },
              {
                icon: <HeartPulse className="h-6 w-6" />,
                title: "Personalized Support",
                description: "Receive evidence-based therapeutic responses, exercises, and insights tailored specifically to your needs."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary/5 to-accent/10 blur-xl" />
                  
                  <div className="flex items-center mb-4 relative z-10">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <div className="ml-4 text-xl font-semibold flex items-center">
                      Step {index + 1}
                      {index < 2 && (
                        <ArrowRight className="h-4 w-4 ml-2 text-muted-foreground hidden md:block" />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 relative z-10">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 relative z-10">{step.description}</p>
                  
                  <div className="mt-auto relative z-10">
                    <Button variant="ghost" className="p-0 h-auto text-primary font-medium">
                      Learn more <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Features />
      <Testimonials />
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-full bg-accent px-4 py-1.5 mb-6">
                <div className="flex items-center text-sm font-medium text-primary">
                  <Calendar className="h-4 w-4 mr-1" />
                  Simple Pricing
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Choose the Right <span className="text-gradient">Plan</span> for You
              </h2>
              
              <p className="text-lg text-muted-foreground">
                We offer flexible pricing options to make mental health support accessible to everyone.
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$9.99",
                period: "per month",
                description: "Essential mental health support for individuals.",
                features: [
                  "Unlimited AI therapy sessions",
                  "Basic mood tracking",
                  "Guided meditation exercises",
                  "Email support"
                ],
                cta: "Get Started",
                popular: false
              },
              {
                name: "Premium",
                price: "$19.99",
                period: "per month",
                description: "Enhanced support with advanced features.",
                features: [
                  "Everything in Basic",
                  "Advanced analytics and insights",
                  "Personalized wellness plans",
                  "Priority email support",
                  "Progress reports"
                ],
                cta: "Try Free for 14 Days",
                popular: true
              },
              {
                name: "Family",
                price: "$39.99",
                period: "per month",
                description: "Comprehensive support for up to 4 family members.",
                features: [
                  "Everything in Premium",
                  "Up to 4 separate accounts",
                  "Family analytics dashboard",
                  "Dedicated support specialist",
                  "Regular check-ins"
                ],
                cta: "Get Started",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="bg-primary text-white text-xs font-bold py-1 px-4 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`h-full flex flex-col rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-primary/10 to-accent/20 border-2 border-primary' 
                    : 'bg-white border border-border'
                }`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> {plan.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full rounded-full ${
                      plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-sm text-muted-foreground">
            All plans include a <span className="font-medium text-foreground">30-day money-back guarantee</span> if you're not completely satisfied.
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -left-20 top-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center bg-white/80 backdrop-blur-lg rounded-3xl p-10 md:p-16 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Begin Your Journey to <span className="text-gradient">Better Mental Health</span> Today
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of individuals who have transformed their mental wellbeing with MindSync. 
              Start your free trial and experience the difference.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full h-14 px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
