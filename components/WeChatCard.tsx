import React from 'react';
import { MessageCircle, ScanLine, Copy, Check } from 'lucide-react';
import { WECHAT_ID, CLASS_NAME } from '../constants';

export const WeChatCard: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WECHAT_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-sm mx-auto transform transition-all hover:scale-105 duration-300">
      <div className="bg-wechat h-32 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black opacity-10 pattern-dots"></div>
        <MessageCircle className="text-white h-16 w-16 relative z-10" />
      </div>
      <div className="px-6 py-8 text-center -mt-12 relative z-20">
        <div className="bg-white p-2 rounded-xl shadow-md inline-block mb-4">
           {/* Placeholder for QR Code */}
           <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
             <div className="text-center">
                <ScanLine className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <span className="text-xs text-gray-500">二维码占位符</span>
             </div>
           </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-1">{CLASS_NAME} 公众号</h3>
        <p className="text-sm text-gray-500 mb-6">扫描上方二维码或搜索ID关注班级动态。</p>

        <div className="flex items-center justify-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
          <span className="font-mono text-gray-700 font-medium">{WECHAT_ID}</span>
          <button 
            onClick={handleCopy}
            className="text-gray-400 hover:text-wechat transition-colors focus:outline-none"
            title="复制ID"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};