export enum ResourceType {
  PDF = 'PDF',
  DOC = 'DOC',
  LINK = '链接',
  VIDEO = '视频'
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  url: string;
  date: string;
  size?: string;
  category: string;
  addedBy?: string;
}

export type UserRole = 'student' | 'teacher';

export interface ForumReply {
  id: string;
  author: string;
  content: string;
  date: string;
  role: UserRole;
}

export interface ForumTopic {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  role: UserRole;
  replies: ForumReply[];
  category: string;
}