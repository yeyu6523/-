import { Resource, ResourceType, BlogPost, ForumTopic } from './types';

export const CLASS_NAME = "24数媒1班";
export const WECHAT_ID = "class24_digitalmedia_1";
export const SCHOOL_NAME = "信息科学学院";

export const CATEGORIES = ['全部', '数据结构', '数学', '信号与系统', '数据库', '其他'];

export const MOCK_RESOURCES: Resource[] = [
  {
    id: '1',
    title: '数据结构：线性表与链表 课件',
    description: '数据结构基础章节，包含代码示例。',
    type: ResourceType.PDF,
    url: '#',
    date: '2023-10-25',
    size: '2.4 MB',
    category: '数据结构',
    addedBy: '李老师'
  },
  {
    id: '2',
    title: '概率论与数理统计：期末复习重点',
    description: '涵盖正态分布、假设检验等核心考点。',
    type: ResourceType.PDF,
    url: '#',
    date: '2023-10-22',
    size: '1.1 MB',
    category: '数学',
    addedBy: '王老师'
  },
  {
    id: '3',
    title: '信号与系统分析基础(非信息类专业)：傅里叶变换',
    description: '针对非信专业的简化版教学PPT。',
    type: ResourceType.PDF,
    url: '#',
    date: '2023-10-20',
    size: '3.5 MB',
    category: '信号与系统',
    addedBy: '赵老师'
  },
  {
    id: '4',
    title: '数据库原理及应用教程：SQL查询实战',
    description: '实验课所需的数据库建表与查询练习文档。',
    type: ResourceType.DOC,
    url: '#',
    date: '2023-10-18',
    size: '150 KB',
    category: '数据库',
    addedBy: '李老师'
  }
];

export const MOCK_POSTS: BlogPost[] = [];

export const MOCK_FORUM_TOPICS: ForumTopic[] = [];