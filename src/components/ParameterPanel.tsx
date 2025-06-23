
import React from 'react';
import ParameterCard from './ParameterCard';
import { AlertTriangle, Eye, Users, Clock, Shield, Activity } from 'lucide-react';

const ParameterPanel = () => {
  const parameters = [
    {
      title: '异常动作识别',
      value: '3',
      unit: '个',
      status: 'poor' as const,
      progress: 75,
      description: '检测到可疑手势动作，包括隐藏物品、异常手部动作等行为。',
      icon: <AlertTriangle className="w-4 h-4" />
    },
    {
      title: '注意力分散',
      value: '12',
      unit: '次',
      status: 'average' as const,
      progress: 60,
      description: '被检测者多次转移视线，可能存在注意力分散或紧张情绪。',
      icon: <Eye className="w-4 h-4" />
    },
    {
      title: '身体姿态',
      value: '78',
      unit: '分',
      status: 'good' as const,
      progress: 78,
      description: '整体身体姿态较为正常，坐姿端正，无明显异常倾斜。',
      icon: <Users className="w-4 h-4" />
    },
    {
      title: '行为持续时间',
      value: '25',
      unit: '分钟',
      status: 'excellent' as const,
      progress: 95,
      description: '谈话进行时间正常，未出现异常中断或延长情况。',
      icon: <Clock className="w-4 h-4" />
    },
    {
      title: '情绪稳定性',
      value: '65',
      unit: '分',
      status: 'average' as const,
      progress: 65,
      description: '情绪波动较为明显，可能存在紧张或不安情绪。',
      icon: <Activity className="w-4 h-4" />
    },
    {
      title: '安全等级评估',
      value: '中等',
      unit: '',
      status: 'average' as const,
      progress: 70,
      description: '综合评估显示存在一定风险，建议加强关注和监控。',
      icon: <Shield className="w-4 h-4" />
    }
  ];

  return (
    <div className="h-full bg-gray-50 p-6 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">行为分析</h2>
        <p className="text-gray-600">实时异常行为检测与分析</p>
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
      
      <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
        <h3 className="font-medium text-red-900 mb-2">⚠️ 异常行为警报</h3>
        <ul className="text-sm text-red-800 space-y-1">
          <li>• 检测到隐藏物品动作</li>
          <li>• 频繁视线转移行为</li>
          <li>• 情绪波动异常</li>
          <li>• 建议加强人工监控</li>
        </ul>
      </div>
    </div>
  );
};

export default ParameterPanel;
