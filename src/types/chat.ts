
export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  title: string;
  preview: string;
  timestamp: Date;
  unread?: boolean;
}
