import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, Sparkles, User, RefreshCw, StopCircle } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { GenerateContentResponse } from "@google/genai";

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "你好呀！我是学习搭子，你的AI助教。👋 \n遇到《数据结构》、《概率论》或者《信号与系统》的难题了吗？尽管问我！"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Create a placeholder for the bot response
    const botMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: botMessageId,
      role: 'model',
      text: ''
    }]);

    try {
      const stream = await sendMessageToGemini(userMessage.text);
      let fullText = '';
      
      for await (const chunk of stream) {
        const contentResponse = chunk as GenerateContentResponse;
        const textChunk = contentResponse.text || '';
        fullText += textChunk;
        
        setMessages(prev => prev.map(msg => 
          msg.id === botMessageId 
            ? { ...msg, text: fullText }
            : msg
        ));
      }

    } catch (error) {
      setMessages(prev => prev.map(msg => 
        msg.id === botMessageId 
          ? { ...msg, text: "抱歉，我现在有点思维混乱。请稍后再试。", isError: true }
          : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-96 h-[600px] max-h-[90vh] bg-white sm:rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 animate-slide-up font-sans">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-primary-600 to-indigo-600 p-4 sm:rounded-t-2xl flex justify-between items-center">
        <div className="flex items-center gap-2 text-white">
          <div className="p-1.5 bg-white/20 rounded-full">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm">学习搭子 AI</h3>
            <div className="flex items-center gap-1.5">
              <span className="block h-2 w-2 rounded-full bg-green-400"></span>
              <span className="text-xs text-blue-100">在线</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-end gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-primary-100' : 'bg-indigo-100'}`}>
                {msg.role === 'user' ? <User className="h-4 w-4 text-primary-600" /> : <Sparkles className="h-4 w-4 text-indigo-600" />}
              </div>
              <div
                className={`p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-primary-600 text-white rounded-br-none shadow-md'
                    : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none shadow-sm'
                } ${msg.isError ? 'border-red-200 bg-red-50 text-red-600' : ''}`}
              >
                 <span className="whitespace-pre-wrap">{msg.text}</span>
                 {msg.role === 'model' && msg.text === '' && (
                    <div className="flex space-x-1 h-5 items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-0"></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                 )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入你的问题..."
            disabled={isLoading}
            className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition-shadow disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={`p-2.5 rounded-xl transition-all ${
              !input.trim() || isLoading
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-primary-600 text-white hover:bg-primary-700 shadow-md transform hover:scale-105 active:scale-95'
            }`}
          >
            {isLoading ? <RefreshCw className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </button>
        </form>
        <p className="text-[10px] text-gray-400 mt-2 text-center">
          AI可能会犯错，请以教材为准。
        </p>
      </div>
    </div>
  );
};