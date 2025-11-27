import React, { useState } from 'react';
import { Header, Footer } from './components/Layout';
import { WeChatCard } from './components/WeChatCard';
import { ResourceList } from './components/ResourceList';
import { AIChat } from './components/AIChat';
import { Login } from './components/Login';
import { Forum } from './components/Forum';
import { User } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-12 animate-fade-in">
            {/* Hero Section */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 h-96">
              <img 
                src="https://picsum.photos/seed/college/1200/600" 
                alt="Classroom" 
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-gray-900/80 to-transparent">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                  欢迎来到 24数媒1班
                </h1>
                <p className="text-xl text-gray-200 max-w-2xl mb-8">
                  自主、开放、共享 —— 信息科学学院学生共建平台
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setActiveTab('resources')}
                    className="px-6 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    获取学习资料
                  </button>
                  <button 
                    onClick={() => setActiveTab('forum')}
                    className="px-6 py-3 bg-primary-600/90 backdrop-blur-sm text-white rounded-full font-bold hover:bg-primary-600 transition-colors shadow-lg border border-primary-500"
                  >
                    进入班级论坛
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'resources':
        return (
          <div className="max-w-5xl mx-auto px-4 animate-fade-in">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">学习资料库</h2>
              <p className="text-gray-500">下载课件、试卷和参考资料。</p>
            </div>
            <ResourceList user={user} />
          </div>
        );

      case 'forum':
        return <Forum user={user} />;

      case 'wechat':
        return (
          <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
             <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">保持连接</h2>
              <p className="text-gray-500">加入我们的微信公众号获取最新通知。</p>
            </div>
            <WeChatCard />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 font-bold text-xl">1</div>
                <h3 className="font-bold text-gray-900 mb-2">扫描二维码</h3>
                <p className="text-sm text-gray-500">打开微信扫描上方的二维码。</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 font-bold text-xl">2</div>
                <h3 className="font-bold text-gray-900 mb-2">关注我们</h3>
                <p className="text-sm text-gray-500">点击“关注”以订阅班级更新。</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 font-bold text-xl">3</div>
                <h3 className="font-bold text-gray-900 mb-2">接收通知</h3>
                <p className="text-sm text-gray-500">不再错过任何作业、活动或重要公告。</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isChatOpen={isChatOpen}
        setIsChatOpen={setIsChatOpen}
        user={user}
        onLogout={() => setUser(null)}
      />
      
      <main className="flex-grow py-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>

      <Footer />

      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;