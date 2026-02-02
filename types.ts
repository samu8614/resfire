
export type Language = 'en' | 'es' | 'pt';

export interface WorkPackageContent {
  title: string;
  description: string;
  tasks: string[];
}

export interface WorkPackage {
  id: string;
  image: string;
  content: Record<Language, WorkPackageContent>;
}

export interface TeamMemberContent {
  role: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  image: string;
  content: Record<Language, TeamMemberContent>;
}

export interface Partner {
  id: string;
  name: string;
  url: string;
  description: string;
  logo?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
