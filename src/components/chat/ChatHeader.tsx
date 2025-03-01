
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';

interface ChatHeaderProps {
  title: string;
  setSidebarOpen: (open: boolean) => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ title, setSidebarOpen }) => {
  const { user } = useUser();
  
  return (
    <header className="h-16 border-b border-mint-green/30 flex items-center px-4 justify-between bg-pastel-green">
      <div className="flex items-center space-x-3">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setSidebarOpen(true)}
          className="md:hidden text-muted-cyan"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h3 className="font-medium text-mint-green">{title}</h3>
      </div>
      <div className="flex items-center space-x-2">
        <div className="hidden md:flex items-center mr-4">
          <Avatar className="h-8 w-8 mr-2">
            {user?.profileImageUrl ? (
              <img src={user.profileImageUrl} alt={user.fullName || "User"} />
            ) : (
              <User className="h-4 w-4" />
            )}
          </Avatar>
          <span className="text-sm text-muted-cyan">{user?.fullName}</span>
        </div>
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-muted-cyan hover:text-mint-green">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default ChatHeader;
