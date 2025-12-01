import React, { useState } from 'react';
import { FileText, Video, Link as LinkIcon, ExternalLink, Search, File } from 'lucide-react';
import { Resource, ResourceType } from '../types';
import { MOCK_RESOURCES, CATEGORIES } from '../constants';

const getIconForType = (type: ResourceType) => {
  switch (type) {
    case ResourceType.PDF:
    case ResourceType.DOC:
      return <FileText className="h-5 w-5 text-red-500" />;
    case ResourceType.VIDEO:
      return <Video className="h-5 w-5 text-purple-500" />;
    case ResourceType.LINK:
      return <LinkIcon className="h-5 w-5 text-blue-500" />;
    default:
      return <File className="h-5 w-5 text-gray-500" />;
  }
};

export const ResourceList: React.FC = () => {
  const [resources] = useState<Resource[]>(MOCK_RESOURCES);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === '全部' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleVisitLink = (resource: Resource) => {
    window.open(resource.url, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent sm:text-sm transition-shadow"
            placeholder="搜索资料..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-primary-50 transition-colors">
                  {getIconForType(resource.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="text-base font-semibold text-gray-900 truncate pr-4">{resource.title}</h4>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                      {resource.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{resource.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                    <span>{resource.date}</span>
                    <span className="uppercase">• {resource.type}</span>
                    {resource.addedBy && <span>• 来源: {resource.addedBy}</span>}
                  </div>
                </div>
                <button 
                  onClick={() => handleVisitLink(resource)}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                  title="访问链接"
                >
                  前往学习 <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-200">
            <File className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-900">未找到相关资料</h3>
            <p className="text-gray-500">请尝试调整搜索关键词或分类。</p>
          </div>
        )}
      </div>
    </div>
  );
};