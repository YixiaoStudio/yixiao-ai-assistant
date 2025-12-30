
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
