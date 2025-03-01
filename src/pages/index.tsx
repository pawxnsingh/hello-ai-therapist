
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import { SignInButton, SignUpButton, useUser } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn } = useUser();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-pastel-green">
      <div className="flex items-center mb-8">
        <Brain className="h-10 w-10 text-mint-green mr-3" />
        <h1 className="text-4xl font-bold text-mint-green">MindSync AI</h1>
      </div>
      
      <p className="text-lg mb-8 text-center max-w-md text-muted-cyan">
        Connect with MindSync AI for personalized conversations that help manage anxiety, improve sleep, and reduce stress.
      </p>
      
      {isSignedIn ? (
        <Link href="/chat">
          <Button size="lg" className="bg-mint-green hover:bg-mint-green/90 text-white">
            Start Chatting
          </Button>
        </Link>
      ) : (
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <SignInButton mode="modal">
            <Button size="lg" className="bg-mint-green hover:bg-mint-green/90 text-white">
              Sign In
            </Button>
          </SignInButton>
          
          <SignUpButton mode="modal">
            <Button size="lg" variant="outline" className="border-mint-green text-mint-green hover:bg-mint-green/10">
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      )}
      
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        <div className="bg-white p-6 rounded-lg shadow-md border border-mint-green/20">
          <h3 className="text-lg font-medium text-mint-green mb-2">Anxiety Management</h3>
          <p className="text-muted-cyan">Learn techniques to identify and manage anxiety triggers in your daily life.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-mint-green/20">
          <h3 className="text-lg font-medium text-mint-green mb-2">Sleep Improvement</h3>
          <p className="text-muted-cyan">Develop better sleep habits with science-backed strategies for quality rest.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-mint-green/20">
          <h3 className="text-lg font-medium text-mint-green mb-2">Stress Reduction</h3>
          <p className="text-muted-cyan">Discover personalized mindfulness exercises to reduce daily stress.</p>
        </div>
      </div>
    </div>
  );
}
