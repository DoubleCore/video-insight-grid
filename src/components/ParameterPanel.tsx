
import React from 'react';
import ParameterCard from './ParameterCard';
import { Activity, Target, Clock, Zap, TrendingUp, Award } from 'lucide-react';

const ParameterPanel = () => {
  const parameters = [
    {
      title: '身体姿态',
      value: '85',
      unit: '分',
      status: 'good' as const,
      progress: 85,
      description: '身体保持良好的流线型，头部位置适中，需要注意肩部的协调性。',
      icon: <Activity className="w-4 h-4" />
    },
    {
      title: '划水频率',
      value: '42',
      unit: '次/分钟',
      status: 'excellent' as const,
      progress: 92,
      description: '划水频率稳定且高效，节奏控制出色。',
      icon: <Clock className="w-4 h-4" />
    },
    {
      title: '划水深度',
      value: '1.2',
      unit: '米',
      status: 'average' as const,
      progress: 68,
      description: '划水深度基本合理，但可以进一步优化入水角度。',
      icon: <Target className="w-4 h-4" />
    },
    {
      title: '游泳速度',
      value: '1.85',
      unit: '米/秒',
      status: 'good' as const,
      progress: 78,
      description: '整体速度表现良好，在保持技术的同时可以适当提高。',
      icon: <Zap className="w-4 h-4" />
    },
    {
      title: '呼吸节奏',
      value: '3',
      unit: '划/次',
      status: 'excellent' as const,
      progress: 95,
      description: '呼吸节奏非常稳定，与划水动作配合默契。',
      icon: <TrendingUp className="w-4 h-4" />
    },
    {
      title: '技术评分',
      value: '82',
      unit: '分',
      status: 'good' as const,
      progress: 82,
      description: '综合技术表现良好，继续保持并优化细节动作。',
      icon: <Award className="w-4 h-4" />
    }
  ];

  return (
    <div className="h-full bg-gray-50 p-6 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">技术分析</h2>
        <p className="text-gray-600">实时游泳技术参数监测与分析</p>
      </div>
      
      <div className="space-y-4">
        {parameters.map((param, index) => (
          <ParameterCard
            key={index}
            title={param.title}
            value={param.value}
            unit={param.unit}
            status={param.status}
            progress={param.progress}
            description={param.description}
            icon={param.icon}
          />
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-medium text-blue-900 mb-2">训练建议</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• 继续保持良好的呼吸节奏</li>
          <li>• 注意优化划水入水角度</li>
          <li>• 可适当提高游泳速度</li>
          <li>• 加强肩部协调性训练</li>
        </ul>
      </div>
    </div>
  );
};

export default ParameterPanel;
