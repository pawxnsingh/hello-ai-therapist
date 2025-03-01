
import React, { useState } from 'react';
import { Message, ChatSession } from '@/types/chat';
import ChatSidebar from '@/components/chat/ChatSidebar';
import ChatHeader from '@/components/chat/ChatHeader';
import MessageList from '@/components/chat/MessageList';
import MessageInput from '@/components/chat/MessageInput';

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
      content: "Public speaking anxiety is something many people experience. Let's break this down into manageable parts. First, it's important to recognize that feeling nervous about presentations is normal and even experienced speakers feel this way. Have you had experience with public speaking before?",
      sender: 'bot',
      timestamp: new Date(2023, 5, 15, 14, 38)
    }
  ]);
  
  // Handle sending a new message
  const handleSendMessage = (newMessage: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
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

  // Find the active chat title
  const activeChatTitle = chatSessions.find(chat => chat.id === activeChat)?.title || 'Chat';
  
  return (
    <div className="flex min-h-screen bg-background">
      <ChatSidebar 
        chatSessions={chatSessions}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        formatDate={formatDate}
      />
      
      <main className="flex-grow flex flex-col">
        <ChatHeader 
          title={activeChatTitle} 
          setSidebarOpen={setSidebarOpen} 
        />
        
        <MessageList 
          messages={messages} 
          formatTime={formatTime} 
        />
        
        <MessageInput 
          onSendMessage={handleSendMessage} 
        />
      </main>
    </div>
  );
};

export default Chat;
