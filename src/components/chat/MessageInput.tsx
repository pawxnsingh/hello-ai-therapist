
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
    <div className="p-4 border-t border-mint-green/30 bg-pastel-green">
      <div className="max-w-3xl mx-auto relative">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          className="w-full rounded-full border border-mint-green/30 bg-white px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-mint-green/50"
        />
        <Button 
          size="icon" 
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-mint-green hover:bg-mint-green/90"
          onClick={handleSendMessage}
        >
          <Send className="h-4 w-4 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default MessageInput;
