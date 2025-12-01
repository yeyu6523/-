import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLASS_NAME } from '../constants';

export const WeChatCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-sm mx-auto transform transition-all hover:scale-105 duration-300">
      <div className="bg-wechat h-64 flex items-center justify-center relative overflow-hidden">
        <img 
          src="photo/gzh-.jpg" 
          alt="公众号二维码" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image fails to load
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
          }}
        />
        {/* Fallback content */}
        <div className="hidden absolute inset-0 flex items-center justify-center bg-wechat">
           <MessageCircle className="text-white h-16 w-16" />
        </div>
      </div>
      <div className="px-6 py-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{CLASS_NAME} 公众号</h3>
        <p className="text-sm text-gray-500">请直接扫描上方图片中的二维码关注。</p>
      </div>
    </div>
  );
};