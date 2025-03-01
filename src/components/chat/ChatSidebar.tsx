
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { ChatSession } from '@/types/chat';
import { useUser, useClerk } from '@clerk/clerk-react';
import { AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut();
  };

  return (
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
              {isLoaded && user?.imageUrl ? (
                <AvatarImage src={user.imageUrl} alt={user.fullName || "User"} />
              ) : (
                <AvatarFallback>
                  <User className="h-5 w-5" />
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <p className="text-sm font-medium">
                {isLoaded && user 
                  ? (user.fullName || user.username || "User") 
                  : "User Profile"}
              </p>
              <p className="text-xs text-muted-foreground">
                {isLoaded && user ? user.primaryEmailAddress?.emailAddress : "user@example.com"}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={handleSignOut}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default ChatSidebar;
