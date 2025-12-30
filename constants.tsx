
import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Share2, 
  Activity, 
  Monitor, 
  Cpu, 
  Lock,
  Download
} from 'lucide-react';
import { Feature } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'points',
    title: '积分点实时监控',
    description: '聚合管理多平台积分与额度，实时监控变动，通过AI算法为您优化积分兑换策略，确保资产价值最大化。',
    icon: 'Activity',
    color: 'bg-blue-500',
  },
  {
    id: 'intelligence',
    title: '全维度行业情报',
    description: '24/7 不间断捕捉行业动态，深度解析竞品趋势与市场波动，让您在决策前夕总能快人一步。',
    icon: 'TrendingUp',
    color: 'bg-emerald-500',
  },
  {
    id: 'copyright',
    title: '设计图一键版权登记',
    description: '接入区块链确权技术，设计稿完成后即可直接发起线上版权登记，秒级响应，为您的原创力量保驾护航。',
    icon: 'ShieldCheck',
    color: 'bg-purple-500',
  },
  {
    id: 'publishing',
    title: '视频多平台智能分发',
    description: '支持抖音、小红书、B站等主流平台，智能适配不同尺寸与封面，一键多端齐发，高效沉淀私域流量。',
    icon: 'Share2',
    color: 'bg-orange-500',
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Share2: <Share2 className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Monitor: <Monitor className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Lock: <Lock className="w-6 h-6" />,
  Download: <Download className="w-6 h-6" />
};
