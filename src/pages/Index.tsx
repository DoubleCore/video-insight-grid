
import React from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import ParameterPanel from '@/components/ParameterPanel';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">游泳技术分析平台</h1>
          <p className="text-gray-600 mt-1">Swimming Technique Analysis Platform</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Side - Video Player */}
        <div className="flex-1 p-6">
          <VideoPlayer />
        </div>
        
        {/* Right Side - Parameter Analysis */}
        <div className="w-96 border-l border-gray-200 bg-white">
          <ParameterPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
