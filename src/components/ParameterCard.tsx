
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface ParameterCardProps {
  title: string;
  value: string | number;
  unit?: string;
  status: 'excellent' | 'good' | 'average' | 'poor';
  progress?: number;
  description?: string;
  icon?: React.ReactNode;
}

const ParameterCard: React.FC<ParameterCardProps> = ({
  title,
  value,
  unit,
  status,
  progress,
  description,
  icon
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-500';
      case 'good': return 'bg-blue-500';
      case 'average': return 'bg-yellow-500';
      case 'poor': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'excellent': return '优秀';
      case 'good': return '良好';
      case 'average': return '一般';
      case 'poor': return '需改进';
      default: return '未知';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-gray-200 bg-white">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            {icon && <div className="text-gray-600">{icon}</div>}
            <h3 className="font-medium text-gray-900">{title}</h3>
          </div>
          <Badge 
            variant="outline" 
            className={`${getStatusColor(status)} text-white border-0`}
          >
            {getStatusText(status)}
          </Badge>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-900">{value}</span>
            {unit && <span className="text-sm text-gray-500 ml-1">{unit}</span>}
          </div>
          
          {progress !== undefined && (
            <div className="space-y-1">
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-gray-500">完成度: {progress}%</p>
            </div>
          )}
          
          {description && (
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ParameterCard;
