import React from 'react';
import { CLASS_NAME } from '../constants';
import gzhImage from '../gzh.jpg';

export const WeChatCard: React.FC = () => {
  return (
    <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100 max-w-md w-full mx-auto hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow duration-500">
      {/* Green Header Area with QR Code */}
      <div className="bg-wechat h-80 flex items-center justify-center relative">
        <div className="bg-white p-3 rounded-2xl shadow-xl w-56 h-56 flex-shrink-0 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
          <img 
            src={gzhImage} 
            alt="公众号二维码" 
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
      
      {/* Content Area */}
      <div className="px-10 py-10 text-center bg-white">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{CLASS_NAME} 公众号</h3>
        <p className="text-gray-500 text-base leading-relaxed">
          请直接扫描上方图片中的二维码关注。
        </p>
      </div>
    </div>
  );
};