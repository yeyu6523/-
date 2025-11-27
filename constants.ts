import { Resource, ResourceType, BlogPost, ForumTopic } from './types';

export const CLASS_NAME = "24数媒1班";
export const WECHAT_ID = "class24_digitalmedia_1";
export const SCHOOL_NAME = "数字媒体学院";

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

export const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '欢迎来到24数媒1班班级主页',
    excerpt: '这是我们需要共享资料和交流的地方。',
    content: '欢迎各位同学！这里是我们的班级线上大本营。你可以在这里找到所有核心课程的学习资料，包括《数据结构》、《概率论与数理统计》、《信号与系统分析基础》以及《数据库原理及应用教程》。请大家踊跃使用论坛功能进行学术讨论。',
    date: '2023-09-01',
    author: '辅导员',
    imageUrl: 'https://picsum.photos/seed/welcome/800/400'
  }
];

export const MOCK_FORUM_TOPICS: ForumTopic[] = [
  {
    id: '1',
    title: '关于数据结构大作业的组队问题',
    content: '请问大家大作业是3人一组还是4人一组？',
    author: '张三',
    date: '2023-10-26',
    role: 'student',
    category: '数据结构',
    replies: [
      {
        id: 'r1',
        author: '李老师',
        content: '原则上不超过3人。',
        date: '2023-10-26 14:00',
        role: 'teacher'
      }
    ]
  },
  {
    id: '2',
    title: '概率论第三章习题讨论',
    content: '课后习题第5题大家算出来答案是多少？我算的是0.5。',
    author: '李四',
    date: '2023-10-27',
    role: 'student',
    category: '数学',
    replies: []
  }
];