
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';

interface ChatHeaderProps {
  title: string;
  setSidebarOpen: (open: boolean) => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ title, setSidebarOpen }) => {
  const { user, isLoaded } = useUser();
  
  return (
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
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="flex items-center space-x-2">
        {isLoaded && user && (
          <span className="text-sm text-muted-foreground mr-2">
            {user.fullName || user.username}
          </span>
        )}
        <Link to="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default ChatHeader;
