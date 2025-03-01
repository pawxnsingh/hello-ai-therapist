
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, LogOut, Send, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatSession {
  id: string;
  title: string;
  preview: string;
  timestamp: Date;
  unread?: boolean;
}

const Chat = () => {
  // State for mobile sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Sample chat sessions data
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: '1',
      title: 'Anxiety Management',
      preview: 'Let\'s discuss some techniques to manage anxiety',
      timestamp: new Date(2023, 5, 15, 14, 30),
      unread: true
    },
    {
      id: '2',
      title: 'Sleep Improvement',
      preview: 'Here are some strategies for better sleep',
      timestamp: new Date(2023, 5, 10, 9, 45)
    },
    {
      id: '3',
      title: 'Stress Reduction',
      preview: 'Breathing exercises for stress',
      timestamp: new Date(2023, 5, 5, 16, 20)
    },
    {
      id: '4',
      title: 'Personal Development',
      preview: 'Setting realistic goals for yourself',
      timestamp: new Date(2023, 4, 28, 11, 15)
    },
    {
      id: '5',
      title: 'Mindfulness Techniques',
      preview: 'Daily mindfulness practices',
      timestamp: new Date(2023, 4, 20, 13, 50)
    }
  ]);
  
  // Current active chat
  const [activeChat, setActiveChat] = useState<string>('1');
  
  // Sample messages for the current chat
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! How are you feeling today?',
      sender: 'bot',
      timestamp: new Date(2023, 5, 15, 14, 31)
    },
    {
      id: '2',
      content: 'I\'ve been feeling a bit anxious lately, especially about work.',
      sender: 'user',
      timestamp: new Date(2023, 5, 15, 14, 33)
    },
    {
      id: '3',
      content: 'I understand. Work-related anxiety is quite common. Could you tell me more about what specific aspects of work are causing you to feel anxious?',
      sender: 'bot',
      timestamp: new Date(2023, 5, 15, 14, 34)
    },
    {
      id: '4',
      content: 'I have a big presentation coming up next week, and I\'m worried about speaking in front of so many people.',
      sender: 'user',
      timestamp: new Date(2023, 5, 15, 14, 36)
    },
    {
      id: '5',
      content: 'Public speaking anxiety is something many people experience. Let's break this down into manageable parts. First, it's important to recognize that feeling nervous about presentations is normal and even experienced speakers feel this way. Have you had experience with public speaking before?',
      sender: 'bot',
      timestamp: new Date(2023, 5, 15, 14, 38)
    }
  ]);
  
  // New message input
  const [newMessage, setNewMessage] = useState('');
  
  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        content: newMessage,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');
      
      // Simulate bot response after delay
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "Thank you for sharing that. It sounds like you're experiencing some significant anxiety about this upcoming presentation. Let's work on some strategies that might help you feel more confident and prepared.",
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    }
  };
  
  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    }
  };
  
  return (
    <div className="flex min-h-screen bg-background">
      {/* Chat list sidebar - hidden on mobile unless toggled */}
      <aside 
        className={cn(
          "w-80 border-r border-border bg-sidebar-background flex-shrink-0 flex flex-col",
          "fixed inset-y-0 left-0 z-50 md:relative md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "transition-transform duration-200"
        )}
      >
        {/* Sidebar header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-semibold">MindSync</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="md:hidden">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
        
        {/* New chat button */}
        <div className="p-4">
          <Button className="w-full justify-start text-left" variant="outline">
            <span>New Chat</span>
          </Button>
        </div>
        
        {/* Chat history */}
        <ScrollArea className="flex-grow">
          <div className="p-4 space-y-1">
            {chatSessions.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setActiveChat(chat.id)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-lg flex flex-col",
                  "hover:bg-sidebar-accent transition-colors duration-200",
                  activeChat === chat.id ? "bg-sidebar-accent" : ""
                )}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium truncate">{chat.title}</span>
                  <span className="text-xs text-muted-foreground">{formatDate(chat.timestamp)}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{chat.preview}</p>
                {chat.unread && (
                  <div className="w-2 h-2 bg-primary rounded-full absolute right-3" />
                )}
              </button>
            ))}
          </div>
        </ScrollArea>
        
        {/* User profile */}
        <div className="p-4 border-t border-border mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <User className="h-5 w-5" />
              </Avatar>
              <div>
                <p className="text-sm font-medium">User Profile</p>
                <p className="text-xs text-muted-foreground">user@example.com</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="ghost" size="icon">
                <LogOut className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </aside>
      
      {/* Main chat area */}
      <main className="flex-grow flex flex-col">
        {/* Chat header */}
        <header className="h-16 border-b border-border flex items-center px-4 justify-between">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSidebarOpen(true)}
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h3 className="font-medium">Anxiety Management</h3>
          </div>
          <div className="flex items-center space-x-2">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </header>
        
        {/* Messages area */}
        <ScrollArea className="flex-grow p-4">
          <div className="space-y-4 max-w-3xl mx-auto">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex",
                  message.sender === 'user' ? "justify-end" : "justify-start"
                )}
              >
                <div 
                  className={cn(
                    "max-w-[80%] rounded-2xl p-4",
                    message.sender === 'user' 
                      ? "bg-primary text-primary-foreground rounded-tr-none"
                      : "bg-secondary text-secondary-foreground rounded-tl-none"
                  )}
                >
                  <div className="flex items-center mb-1">
                    {message.sender === 'bot' && (
                      <Brain className="h-4 w-4 mr-2" />
                    )}
                    <span className="font-medium">
                      {message.sender === 'user' ? 'You' : 'MindSync AI'}
                    </span>
                    <span className="text-xs ml-2 opacity-70">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  <p>{message.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
        
        {/* Message input */}
        <div className="p-4 border-t border-border">
          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="w-full rounded-full border border-input bg-background px-4 py-3 pr-12"
            />
            <Button 
              size="icon" 
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
              onClick={handleSendMessage}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
