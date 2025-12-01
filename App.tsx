import React, { useState } from 'react';
import { Header, Footer } from './components/Layout';
import { WeChatCard } from './components/WeChatCard';
import { ResourceList } from './components/ResourceList';
import { Forum } from './components/Forum';
import { Calendar, Image as ImageIcon, Heart, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Login logic removed, app is now open to all

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-16 animate-fade-in pb-12">
            {/* Hero Section */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 h-96 group">
              <img 
                src="https://picsum.photos/seed/tech/1200/600" 
                alt="Classroom" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent">
                <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-sm font-medium mb-4 border border-white/30">
                  2024级 数字媒体技术
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
                  数字媒体技术1班
                </h1>
                <p className="text-xl text-gray-200 max-w-2xl mb-8 font-light">
                  自主 · 开放 · 共享 —— 信息科学学院学生共建平台
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setActiveTab('resources')}
                    className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    获取学习资料
                  </button>
                  <button 
                    onClick={() => setActiveTab('forum')}
                    className="px-8 py-3 bg-primary-600/90 backdrop-blur-sm text-white rounded-full font-bold hover:bg-primary-500 transition-all shadow-lg hover:shadow-primary-500/30 border border-primary-500 transform hover:-translate-y-1"
                  >
                    进入班级论坛
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Calendar, label: '本周课表', color: 'bg-purple-50 text-purple-600 hover:bg-purple-100' },
                  { icon: ImageIcon, label: '班级相册', color: 'bg-pink-50 text-pink-600 hover:bg-pink-100' },
                  { icon: Heart, label: '心情树洞', color: 'bg-orange-50 text-orange-600 hover:bg-orange-100' },
                ].map((item, index) => (
                  <button 
                    key={index}
                    onClick={() => alert(`"${item.label}" 功能正在开发中，敬请期待！`)}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border border-transparent hover:border-gray-100 ${item.color}`}
                  >
                    <item.icon className="h-8 w-8 mb-3" />
                    <span className="font-medium text-gray-800">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Inspirational Quote Section (kx.jpg) */}
            <div className="max-w-5xl mx-auto px-4">
              <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -ml-16 -mb-16"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                      <img 
                        src="/kx.jpg" 
                        alt="开心的话日子也不算虚度" 
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<div class="bg-gray-100 h-64 flex items-center justify-center text-gray-400">kx.jpg 未找到</div>`;
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-wider">
                      <Sun className="h-3 w-3" /> Daily Mood
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                      保持热爱<br/>
                      <span className="text-primary-600">奔赴山海</span>
                    </h2>
                    
                    <div className="relative">
                      <p className="text-xl md:text-2xl text-gray-600 italic font-serif leading-relaxed">
                        “开心的话日子也不算虚度”
                      </p>
                      <div className="w-12 h-1 bg-primary-500 mt-6 mx-auto md:mx-0 rounded-full"></div>
                    </div>

                    <p className="text-sm text-gray-400">
                      — 致 24数媒1班 的每一位同学
                    </p>
                  </div>
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