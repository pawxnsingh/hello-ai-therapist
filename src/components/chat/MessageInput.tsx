
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
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
  );
};

export default MessageInput;
