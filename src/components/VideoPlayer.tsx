
import React, { useState } from 'react';
import { Play, Pause, Volume2, Maximize, SkipBack, SkipForward, Camera, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([80]);
  const [progress, setProgress] = useState([30]);

  const handleScreenshot = () => {
    console.log('截图功能触发');
    // 这里可以添加实际的截图逻辑
  };

  return (
    <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
      {/* Video Container */}
      <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        {/* Placeholder for video - in real implementation, this would be a video element */}
        <div className="text-center text-gray-400">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
            <Eye className="w-12 h-12 text-white" />
          </div>
          <p className="text-lg">AI行为监控视频</p>
          <p className="text-sm opacity-75">Behavior Detection Camera</p>
        </div>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full w-16 h-16 bg-white/20 backdrop-blur-sm border-white/30"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
          </Button>
        </div>

        {/* Screenshot Button */}
        <div className="absolute top-4 right-4">
          <Button
            size="sm"
            variant="secondary"
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={handleScreenshot}
          >
            <Camera className="w-4 h-4 mr-2" />
            截图
          </Button>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-900 p-4 space-y-3">
        {/* Progress Bar */}
        <div className="space-y-2">
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>04:32</span>
            <span>15:24</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="ghost" className="text-white hover:bg-gray-800">
              <SkipBack className="w-4 h-4" />
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-white hover:bg-gray-800"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <Button size="sm" variant="ghost" className="text-white hover:bg-gray-800">
              <SkipForward className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Volume2 className="w-4 h-4 text-gray-400" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="w-20"
            />
            <Button size="sm" variant="ghost" className="text-white hover:bg-gray-800">
              <Maximize className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
