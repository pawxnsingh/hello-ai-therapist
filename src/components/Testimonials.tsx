
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Heart, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  profileBg: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emily Chen",
      role: "Marketing Professional",
      content: "MindSync has been my daily companion for managing anxiety. The AI provides thoughtful responses that help me reframe negative thoughts. It's like having a therapist in my pocket, available whenever I need support.",
      rating: 5,
      profileBg: "from-orange-400 to-red-400"
    },
    {
      id: 2,
      name: "Michael Rivera",
      role: "Software Engineer",
      content: "As someone who struggles with traditional therapy settings, MindSync has been revolutionary. The privacy and 24/7 availability mean I can process my thoughts at my own pace, without judgment.",
      rating: 5,
      profileBg: "from-blue-400 to-indigo-400"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Healthcare Worker",
      content: "Working night shifts made finding consistent therapy impossible. MindSync fits perfectly into my irregular schedule, providing evidence-based techniques for managing stress during difficult shifts.",
      rating: 4,
      profileBg: "from-green-400 to-teal-400"
    },
    {
      id: 4,
      name: "David Parker",
      role: "College Student",
      content: "The affordability and accessibility of MindSync made mental health support possible for me as a student. The progress tracking feature helps me see how far I've come in managing my depression.",
      rating: 5,
      profileBg: "from-purple-400 to-pink-400"
    },
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 px-6 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-accent/10 -skew-y-3 transform-gpu" />
      
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
                <Heart className="h-4 w-4 mr-1" />
                Success Stories
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Hear from Our <span className="text-gradient">Community</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Thousands of people have transformed their mental wellbeing with MindSync. 
              Here's what some of them have to say.
            </p>
          </motion.div>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.5 }}
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full px-4 md:px-8 lg:px-16"
                  style={{ flex: `0 0 ${100 / testimonials.length}%` }}
                >
                  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-3xl" />
                    
                    <div className="flex items-start gap-6 mb-6 relative z-10">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.profileBg} flex items-center justify-center text-white font-medium text-xl`}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <MessageCircle className="absolute -left-1 -top-1 h-8 w-8 text-primary/10 rotate-180" />
                      <p className="text-lg leading-relaxed pl-5 pt-2 text-foreground/80">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-10 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              onClick={handlePrev}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              onClick={handleNext}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
