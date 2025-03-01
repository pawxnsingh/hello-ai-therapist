
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Brain, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { ChatSession } from '@/types/chat';
import { useUser, useClerk } from '@clerk/nextjs';

interface ChatSidebarProps {
  chatSessions: ChatSession[];
  activeChat: string;
  setActiveChat: (id: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  formatDate: (date: Date) => string;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  chatSessions,
  activeChat,
  setActiveChat,
  sidebarOpen,
  setSidebarOpen,
  formatDate
}) => {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <aside 
      className={cn(
        "w-80 border-r border-mint-green/30 bg-pastel-green flex-shrink-0 flex flex-col",
        "fixed inset-y-0 left-0 z-50 md:relative md:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full",
        "transition-transform duration-200"
      )}
    >
      {/* Sidebar header */}
      <div className="p-4 border-b border-mint-green/30 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-mint-green" />
          <h2 className="text-lg font-semibold text-mint-green">MindSync</h2>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="md:hidden text-muted-cyan">
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>
      
      {/* New chat button */}
      <div className="p-4">
        <Button className="w-full justify-start text-left bg-mint-green hover:bg-mint-green/90 text-white" variant="outline">
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
                "hover:bg-mint-green/10 transition-colors duration-200 text-muted-cyan",
                activeChat === chat.id ? "bg-mint-green/20" : ""
              )}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium truncate">{chat.title}</span>
                <span className="text-xs text-muted-cyan/70">{formatDate(chat.timestamp)}</span>
              </div>
              <p className="text-sm text-muted-cyan/70 truncate">{chat.preview}</p>
              {chat.unread && (
                <div className="w-2 h-2 bg-mint-green rounded-full absolute right-3" />
              )}
            </button>
          ))}
        </div>
      </ScrollArea>
      
      {/* User profile */}
      <div className="p-4 border-t border-mint-green/30 mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              {user?.profileImageUrl ? (
                <img src={user.profileImageUrl} alt={user.fullName || "User"} />
              ) : (
                <User className="h-5 w-5" />
              )}
            </Avatar>
            <div>
              <p className="text-sm font-medium text-muted-cyan">{user?.fullName || "User Profile"}</p>
              <p className="text-xs text-muted-cyan/70">{user?.primaryEmailAddress?.emailAddress || "user@example.com"}</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-muted-cyan hover:text-mint-green"
            onClick={() => signOut()}
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default ChatSidebar;
