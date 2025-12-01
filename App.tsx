import React, { useState } from 'react';
import { Header, Footer } from './components/Layout';
import { WeChatCard } from './components/WeChatCard';
import { ResourceList } from './components/ResourceList';
import { Forum } from './components/Forum';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Login logic removed, app is now open to all

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-12 animate-fade-in">
            {/* Hero Section */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 h-96">
              <img 
                src="https://picsum.photos/seed/tech/1200/600" 
                alt="Classroom" 
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-gray-900/80 to-transparent">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                  欢迎来到 数字媒体技术1班
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
              <p className="text-gray-500">精选网络课程、视频教程与参考文档。</p>
            </div>
            <ResourceList />
          </div>
        );

      case 'forum':
        return <Forum />;

      case 'wechat':
        return (
          <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in flex flex-col items-center justify-center min-h-[60vh]">
             <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">微信公众号</h2>
              <p className="text-gray-500">关注我们的微信公众号获取最新通知。</p>
            </div>
            <WeChatCard />
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
      />
      
      <main className="flex-grow py-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;