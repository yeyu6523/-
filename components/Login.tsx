import React, { useState } from 'react';
import { User, UserRole } from '../types';
import { GraduationCap } from 'lucide-react';
import { CLASS_NAME } from '../constants';

interface LoginProps {
  onLogin: (user: User) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState<UserRole>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    // In a real app, this would validate against a backend
    const mockUser: User = {
      id: Date.now().toString(),
      name: name,
      role: role
    };
    onLogin(mockUser);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
            <GraduationCap className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{CLASS_NAME} 登录</h2>
          <p className="text-gray-500 mt-2">请登录以访问班级资料和论坛</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              姓名
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
              placeholder="请输入您的姓名"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              身份
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex items-center justify-center px-4 py-3 border rounded-lg text-sm font-medium transition-all ${
                  role === 'student'
                    ? 'border-primary-600 bg-primary-50 text-primary-700 ring-1 ring-primary-600'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                学生
              </button>
              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={`flex items-center justify-center px-4 py-3 border rounded-lg text-sm font-medium transition-all ${
                  role === 'teacher'
                    ? 'border-primary-600 bg-primary-50 text-primary-700 ring-1 ring-primary-600'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                教师 (管理员)
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500 text-center">
              * 选择"教师"身份可管理资料
            </p>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            进入班级空间
          </button>
        </form>
      </div>
    </div>
  );
};