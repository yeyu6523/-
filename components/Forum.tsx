import React, { useState } from 'react';
import { ForumTopic, ForumReply } from '../types';
import { MOCK_FORUM_TOPICS, CATEGORIES } from '../constants';
import { MessageSquare, User as UserIcon, Plus, Send, Clock } from 'lucide-react';

export const Forum: React.FC = () => {
  const [topics, setTopics] = useState<ForumTopic[]>(MOCK_FORUM_TOPICS);
  const [selectedTopic, setSelectedTopic] = useState<ForumTopic | null>(null);
  
  // New Topic State
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newTopicContent, setNewTopicContent] = useState('');
  const [newTopicCategory, setNewTopicCategory] = useState(CATEGORIES[1]);
  const [newTopicAuthor, setNewTopicAuthor] = useState('');
  
  // Reply State
  const [replyContent, setReplyContent] = useState('');
  const [replyAuthor, setReplyAuthor] = useState('');
  
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTopicTitle.trim() || !newTopicContent.trim() || !newTopicAuthor.trim()) return;

    const topic: ForumTopic = {
      id: Date.now().toString(),
      title: newTopicTitle,
      content: newTopicContent,
      author: newTopicAuthor,
      date: new Date().toISOString().split('T')[0],
      role: 'student',
      category: newTopicCategory,
      replies: []
    };
    setTopics([topic, ...topics]);
    setIsCreating(false);
    setNewTopicTitle('');
    setNewTopicContent('');
    setNewTopicAuthor('');
  };

  const handleReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTopic || !replyContent.trim() || !replyAuthor.trim()) return;

    const reply: ForumReply = {
      id: Date.now().toString(),
      author: replyAuthor,
      content: replyContent,
      date: new Date().toLocaleString(),
      role: 'student'
    };

    const updatedTopics = topics.map(t => {
      if (t.id === selectedTopic.id) {
        return { ...t, replies: [...t.replies, reply] };
      }
      return t;
    });

    setTopics(updatedTopics);
    setSelectedTopic({ ...selectedTopic, replies: [...selectedTopic.replies, reply] });
    setReplyContent('');
    // Optionally keep author name for easier multiple replies
  };

  if (selectedTopic) {
    return (
      <div className="max-w-4xl mx-auto px-4 animate-fade-in">
        <button 
          onClick={() => setSelectedTopic(null)}
          className="mb-4 text-sm text-gray-500 hover:text-primary-600 flex items-center gap-1"
        >
          ← 返回帖子列表
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100">
                {selectedTopic.category}
              </span>
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <Clock className="h-3 w-3" /> {selectedTopic.date}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{selectedTopic.title}</h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600">
                <UserIcon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-medium text-gray-900 flex items-center gap-2">
                  {selectedTopic.author}
                </div>
                <div className="text-xs text-gray-500">楼主</div>
              </div>
            </div>
            <div className="prose max-w-none text-gray-700 bg-gray-50 p-4 rounded-lg">
              {selectedTopic.content}
            </div>
          </div>

          <div className="bg-gray-50 p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" /> 回复 ({selectedTopic.replies.length})
            </h3>
            
            <div className="space-y-4 mb-8">
              {selectedTopic.replies.length > 0 ? (
                selectedTopic.replies.map(reply => (
                  <div key={reply.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">
                          {reply.author}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">{reply.date}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{reply.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-400 py-4 text-sm">暂无回复，快来抢沙发吧！</p>
              )}
            </div>

            <form onSubmit={handleReply} className="space-y-3">
              <input
                  type="text"
                  required
                  value={replyAuthor}
                  onChange={(e) => setReplyAuthor(e.target.value)}
                  placeholder="你的昵称"
                  className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
              <div className="flex gap-3">
                <input
                  type="text"
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="发表你的看法..."
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!replyContent.trim() || !replyAuthor.trim()}
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send className="h-4 w-4" /> 发送
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">班级论坛</h2>
          <p className="text-gray-500 mt-1">讨论学术问题，分享学习心得。</p>
        </div>
        <button
          onClick={() => setIsCreating(!isCreating)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 flex items-center gap-2 shadow-sm"
        >
          {isCreating ? '取消' : <><Plus className="h-5 w-5" /> 发布新帖</>}
        </button>
      </div>

      {isCreating && (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8 animate-slide-down">
          <h3 className="text-lg font-bold text-gray-900 mb-4">发布新话题</h3>
          <form onSubmit={handleCreateTopic} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
               <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">标题</label>
                  <input
                    type="text"
                    required
                    value={newTopicTitle}
                    onChange={(e) => setNewTopicTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="请输入简洁明了的标题"
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">昵称</label>
                  <input
                    type="text"
                    required
                    value={newTopicAuthor}
                    onChange={(e) => setNewTopicAuthor(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="你的名字"
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">分类</label>
                  <select
                    value={newTopicCategory}
                    onChange={(e) => setNewTopicCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white"
                  >
                    {CATEGORIES.filter(c => c !== '全部').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
               </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">内容</label>
              <textarea
                required
                rows={4}
                value={newTopicContent}
                onChange={(e) => setNewTopicContent(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="详细描述你的问题..."
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
              >
                发布
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {topics.length > 0 ? (
          topics.map(topic => (
            <div
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-600">
                      {topic.category}
                    </span>
                    <span className="text-xs text-gray-400">• {topic.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">{topic.content}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                    <UserIcon className="h-3 w-3" /> {topic.author}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center pl-4 border-l border-gray-100 h-full">
                   <MessageSquare className="h-5 w-5 text-gray-300 group-hover:text-primary-500 transition-colors" />
                   <span className="text-sm font-medium text-gray-600 mt-1">{topic.replies.length}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-200">
            <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-900">暂无讨论</h3>
            <p className="text-gray-500">还没有人发帖，来做第一个发言的人吧！</p>
          </div>
        )}
      </div>
    </div>
  );
};