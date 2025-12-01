import React from 'react';
import { CLASS_NAME } from '../constants';

export const WeChatCard: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-sm mx-auto hover:shadow-2xl transition-shadow duration-300">
      {/* Green Header Area with QR Code */}
      <div className="bg-wechat p-12 flex items-center justify-center">
        <div className="bg-white p-2 rounded-2xl shadow-lg w-56 h-56 flex-shrink-0 flex items-center justify-center">
          <img 
            src="photo/gzh-.jpg" 
            alt="公众号二维码" 
            className="w-full h-full object-contain rounded-xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null; 
              target.style.display = 'none';
              // Display what the browser resolved the src to
              const resolvedSrc = target.src;
              target.parentElement!.innerHTML = `
                <div class="text-center p-2 flex flex-col items-center justify-center h-full">
                  <p class="text-sm font-bold text-red-500 mb-1">图片加载失败</p>
                  <p class="text-[10px] text-gray-400 mb-2 break-all line-clamp-2">${resolvedSrc}</p>
                  <div class="text-xs text-left bg-gray-50 p-2 rounded border border-gray-200 w-full">
                    <p class="font-semibold text-gray-700">请检查:</p>
                    <ol class="list-decimal pl-4 mt-1 space-y-1 text-gray-600">
                      <li>文件夹名为 <b>photo</b></li>
                      <li>文件名为 <b>gzh-.jpg</b> (注意减号)</li>
                      <li>文件在 <b>public</b> 文件夹内</li>
                    </ol>
                  </div>
                </div>`;
            }}
          />
        </div>
      </div>
      
      {/* Content Area */}
      <div className="px-8 py-8 text-center bg-white">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{CLASS_NAME} 公众号</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          请直接扫描上方图片中的二维码关注。
        </p>
      </div>
    </div>
  );
};