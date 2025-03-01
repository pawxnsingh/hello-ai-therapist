
import React from 'react';
import { Brain } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Message } from '@/types/chat';

interface MessageListProps {
  messages: Message[];
  formatTime: (date: Date) => string;
}

const MessageList: React.FC<MessageListProps> = ({ messages, formatTime }) => {
  return (
    <ScrollArea className="flex-grow p-4 bg-pastel-green/50">
      <div className="space-y-4 max-w-3xl mx-auto">
        {messages.map((message) => (
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
                  ? "bg-mint-green text-white rounded-tr-none"
                  : "bg-muted-cyan/20 text-muted-cyan rounded-tl-none"
              )}
            >
              <div className="flex items-center mb-1">
                {message.sender === 'bot' && (
                  <Brain className="h-4 w-4 mr-2 text-mint-green" />
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
  );
};

export default MessageList;
