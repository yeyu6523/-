import { Resource, ResourceType, ForumTopic } from './types';

export const CLASS_NAME = "数字媒体技术1班";
export const SCHOOL_NAME = "信息科学学院";

export const CATEGORIES = ['全部', '数据结构', '数学', '信号与系统', '数据库', '数字媒体', '游戏开发', '视觉设计', '其他'];

// Updated resources with external links instead of local files
export const MOCK_RESOURCES: Resource[] = [
  {
    id: '1',
    title: '数据结构：线性表与链表 (MOOC)',
    description: '中国大学MOOC 数据结构课程章节，包含代码示例。',
    type: ResourceType.LINK,
    url: 'https://www.icourse163.org/course/ZJU-93001',
    date: '2023-10-25',
    category: '数据结构',
    addedBy: '管理员'
  },
  {
    id: '2',
    title: '概率论与数理统计：期末复习重点',
    description: '涵盖正态分布、假设检验等核心考点 (B站视频)。',
    type: ResourceType.VIDEO,
    url: 'https://www.bilibili.com/video/BV1ot411y7mU',
    date: '2023-10-22',
    category: '数学',
    addedBy: '管理员'
  },
  {
    id: '3',
    title: '信号与系统分析基础(非信息类专业)：傅里叶变换',
    description: '针对非信专业的简化版教学资料。',
    type: ResourceType.LINK,
    url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-003-signals-and-systems-fall-2011/',
    date: '2023-10-20',
    category: '信号与系统',
    addedBy: '管理员'
  },
  {
    id: '4',
    title: '数据库原理及应用教程：SQL查询实战',
    description: 'W3School SQL 教程与在线练习。',
    type: ResourceType.LINK,
    url: 'https://www.w3school.com.cn/sql/index.asp',
    date: '2023-10-18',
    category: '数据库',
    addedBy: '管理员'
  },
  {
    id: '5',
    title: 'Unity 3D 游戏开发基础教程',
    description: '从零开始学习Unity引擎，适合数媒专业游戏方向入门。',
    type: ResourceType.VIDEO,
    url: 'https://learn.unity.com/',
    date: '2023-11-01',
    category: '游戏开发',
    addedBy: '管理员'
  },
  {
    id: '6',
    title: 'Blender 零基础入门建模',
    description: '开源3D建模软件Blender的完全指南，涵盖建模、材质与渲染。',
    type: ResourceType.VIDEO,
    url: 'https://www.bilibili.com/video/BV1Ah411d7n3',
    date: '2023-11-05',
    category: '数字媒体',
    addedBy: '管理员'
  },
  {
    id: '7',
    title: 'Adobe After Effects 动效设计实战',
    description: 'MG动画与后期合成基础技巧。',
    type: ResourceType.VIDEO,
    url: 'https://helpx.adobe.com/cn/after-effects/tutorials.html',
    date: '2023-11-10',
    category: '视觉设计',
    addedBy: '管理员'
  },
  {
    id: '8',
    title: '计算机图形学 (Games101)',
    description: '闫令琪大神讲授的现代计算机图形学入门。',
    type: ResourceType.VIDEO,
    url: 'https://sites.cs.ucsb.edu/~lingqi/teaching/games101.html',
    date: '2023-11-12',
    category: '数字媒体',
    addedBy: '管理员'
  },
  {
    id: '9',
    title: 'Web前端开发：HTML5/CSS3/JavaScript',
    description: 'MDN Web 开发权威指南，交互媒体设计基础。',
    type: ResourceType.LINK,
    url: 'https://developer.mozilla.org/zh-CN/docs/Learn',
    date: '2023-11-15',
    category: '数字媒体',
    addedBy: '管理员'
  }
];

export const MOCK_FORUM_TOPICS: ForumTopic[] = [];