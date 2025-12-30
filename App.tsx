
import React, { useEffect, useState } from 'react';
import { FEATURES, ICON_MAP } from './constants';
import AIChatDemo from './components/AIChatDemo';
import { Monitor, ChevronRight, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    alert("正在准备安装包，逸潇AI助手安装器(Windows版)即将下载。\n\n系统要求：Windows 10/11 x64");
  };

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">逸</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">逸潇AI助手</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">核心功能</a>
            <a href="#ai-demo" className="hover:text-blue-600 transition-colors">AI 体验</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">关于我们</a>
            <button 
              onClick={handleDownload}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              立即下载
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-100 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            V2.5 现已发布，专为 Windows 优化
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] text-gray-900">
            从灵感到发布 <br />
            <span className="gradient-text">全流程智能协作</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12 leading-relaxed">
            逸潇AI助手是一款集积分监控、情报挖掘、版权保护与多端分发于一体的桌面级工具。让技术回归服务，让创作重获自由。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={handleDownload}
              className="group bg-gray-900 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-gray-800 transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl active:scale-95"
            >
              <Monitor className="w-6 h-6" />
              下载 Windows 版
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#features" className="px-10 py-4 rounded-2xl text-lg font-bold text-gray-600 hover:bg-gray-100 transition-all">
              了解详细功能
            </a>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-400 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://picsum.photos/seed/yixiao/1200/700" 
              alt="Dashboard Preview" 
              className="relative rounded-2xl shadow-2xl border border-white/20 w-full object-cover h-[400px] md:h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">四大核心功能，赋能高效创作</h2>
            <p className="text-gray-600 max-w-xl mx-auto">打破工具边界，为您整合最需要的业务流程。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-blue-100 hover:bg-white transition-all shadow-sm hover:shadow-xl hover-scale">
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-${feature.color.split('-')[1]}-200`}>
                  {ICON_MAP[feature.icon]}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <section id="ai-demo" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 leading-tight">不仅是工具，<br />更是懂你的AI助手</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">智能对话问答</h4>
                    <p className="text-gray-600">随时查询操作指南或行业资讯，AI实时响应。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">工作流自动化</h4>
                    <p className="text-gray-600">通过简单指令，自动串联版权登记与平台分发。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">跨平台数据同步</h4>
                    <p className="text-gray-600">Windows端设置，全平台账户数据云端实时同步。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <AIChatDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl font-extrabold text-blue-600 mb-2">10万+</div>
              <div className="text-gray-600 font-medium">累计活跃用户</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-emerald-500 mb-2">5000万+</div>
              <div className="text-gray-600 font-medium">监控积分总额</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-purple-600 mb-2">120万+</div>
              <div className="text-gray-600 font-medium">完成版权登记</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-orange-500 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">分发成功率</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">准备好提升您的效率了吗？</h2>
          <p className="text-gray-400 text-xl mb-12">
            加入数万名专业创作者的行列，体验“逸潇”带来的高效与智能。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={handleDownload}
              className="bg-white text-gray-900 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all flex items-center gap-3 shadow-xl active:scale-95"
            >
              立即下载 Windows 版
            </button>
            <p className="text-gray-500 text-sm">
              * 目前暂仅支持 Windows 10/11 系统 <br />
              macOS 与移动版正在开发中
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">逸</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-900">逸潇AI助手</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-600">服务条款</a>
              <a href="#" className="hover:text-blue-600">隐私政策</a>
              <a href="#" className="hover:text-blue-600">联系我们</a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 逸潇科技. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
