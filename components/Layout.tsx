import React, { useState } from 'react';
import { Menu, X, GraduationCap, BookOpen, MessageCircle, Home, Download, Users, LogOut, User as UserIcon } from 'lucide-react';
import { CLASS_NAME, SCHOOL_NAME } from '../constants';
import { User } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  user: User | null;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, isChatOpen, setIsChatOpen, user, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'resources', label: '学习资料', icon: BookOpen },
    { id: 'forum', label: '班级论坛', icon: Users },
    { id: 'wechat', label: '班级公众号', icon: MessageCircle },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="bg-primary-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-lg leading-tight">{CLASS_NAME}</span>
                <span className="text-xs text-gray-500">{SCHOOL_NAME}</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user && navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
            
            {user && (
              <>
                 <div className="h-6 w-px bg-gray-200 mx-2"></div>
                 <div className="flex items-center gap-2 px-2">
                    <div className={`p-1 rounded-full ${user.role === 'teacher' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}>
                        <UserIcon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700">{user.name}</span>
                        <span className="text-[10px] text-gray-500 uppercase leading-none">{user.role === 'teacher' ? '教师' : '学生'}</span>
                    </div>
                 </div>
                 <button 
                   onClick={onLogout}
                   className="text-gray-400 hover:text-red-500 transition-colors p-2"
                   title="退出登录"
                 >
                   <LogOut className="h-4 w-4" />
                 </button>
              </>
            )}

            {user && (
              <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                AI 学习搭子
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {user ? (
               <>
                 <div className="px-3 py-2 flex items-center justify-between border-b border-gray-100 mb-2">
                    <span className="font-medium text-gray-900">{user.name} ({user.role === 'teacher' ? '教师' : '学生'})</span>
                    <button onClick={onLogout} className="text-sm text-red-500">退出</button>
                 </div>
                 {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full px-3 py-3 rounded-md text-base font-medium ${
                      activeTab === item.id
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </button>
                ))}
                 <button
                  onClick={() => {
                    setIsChatOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary-600 text-white font-medium"
                >
                  AI 学习搭子
                </button>
               </>
             ) : (
               <div className="px-3 py-4 text-center text-gray-500">
                 请先登录
               </div>
             )}
            
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-200 mt-12">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-gray-500 text-sm">© 2024 {SCHOOL_NAME} - {CLASS_NAME}</p>
          <p className="text-gray-400 text-xs mt-1">Empowering students to reach their full potential.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">School Website</span>
            <Home className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Materials</span>
            <Download className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);