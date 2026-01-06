
import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend, AreaChart, Area, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  HISTORY_EVENTS, 
  PRODUCTS, 
  MARKET_SHARE_DATA, 
  GROWTH_DATA,
  REGIONAL_STRATEGY,
  RD_CORE_TECHS,
  HARDWARE_RD_DATA,
  COMPETITOR_COMPARISON,
  INDUSTRY_METRICS_CHART,
  INDUSTRY_VERTICALS,
  FUTURE_RD_FOCUS
} from './constants';
import { getDjiInsight } from './services/geminiService';

const COLORS = ['#1e293b', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'rnd' | 'products' | 'market' | 'competitors' | 'strategy' | 'future'>('overview');
  const [aiInsight, setAiInsight] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      setLoading(true);
      let contextQuery = "";
      if (activeTab === 'future') {
        contextQuery = "深入探讨大疆在未来5年的产品方向：AI端侧化、固态电池技术、以及如何通过数字孪生重塑工业巡检流程。";
      } else {
        contextQuery = "深度分析大疆（DJI）与同行业主要对手的优劣势对比，以及其硬件研发的核心逻辑。";
      }
      
      const query = `
        ${contextQuery}
        要求：
        1. 针对 ${activeTab} 板块提供精准的行业洞察。
        2. 强调硬件（SoC, 动力, 传感器）与软件（AI 算法, SDK 生态）的协同优势。
        3. 数据准确，视角前瞻。
      `;
      const insight = await getDjiInsight(query);
      setAiInsight(insight || '无法获取实时分析数据。');
      setLoading(false);
    };
    fetchInsight();
  }, [activeTab]);

  const renderSection = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">大疆创新 (DJI)</h2>
                  <p className="text-xl text-blue-600 font-medium mt-2">全球空间智能时代的领航者</p>
                </div>
                <div className="bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                  <span className="text-slate-500 text-sm font-semibold">企业代码: 非上市私有公司</span>
                </div>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-4xl">
                大疆创新不仅是一家无人机公司，更是全球领先的<strong>“天空机器人”</strong>平台提供商。通过“影像+飞控”的双核心驱动，大疆在消费级无人机领域建立了绝对的市场统治力。近年来，大疆通过底层技术的横向迁移，已在农业自动化、能源巡检、地理测绘及智能驾驶辅助领域完成了深度战略卡位。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { label: '全球市场占有率', value: '72%+', color: 'text-blue-600', sub: '消费级无人机' },
                  { label: '研发人员占比', value: '约 25%', color: 'text-emerald-600', sub: '技术导向型组织' },
                  { label: '全球专利数', value: '14,000+', color: 'text-amber-600', sub: 'PCT申请量领先' },
                  { label: '估值水平', value: '$160B+', color: 'text-purple-600', sub: '行业独角兽之首' },
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-slate-500 text-xs font-bold uppercase mb-1">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-slate-400 text-[10px] mt-1">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3 p-2 bg-blue-600 rounded-lg">🤖</span> Gemini AI 战略研判
              </h3>
              {loading ? (
                <div className="flex space-x-3 items-center py-8">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                </div>
              ) : (
                <div className="prose prose-invert max-w-none">
                  {aiInsight.split('\n').map((line, i) => (
                    <p key={i} className="text-slate-300 leading-relaxed mb-4 text-base">{line}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 'rnd':
        return (
          <div className="space-y-10 animate-fadeIn">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/3">
                  <h3 className="text-3xl font-bold mb-6 text-slate-900">硬件实验室：精密工业的巅峰</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    大疆的硬件研发不仅在于“组装”，而在于“重塑”。从无刷电机的硅钢片选择到图传基带的ASIC设计，大疆坚持<strong>“极致性能优先级”</strong>。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-slate-50 rounded-2xl">
                      <h4 className="font-bold text-slate-800 mb-2">垂直整合 2.0</h4>
                      <p className="text-sm text-slate-500">大疆自建了高精度的电机生产线和光学实验室，甚至自行研发了用于自动化测试的机器人系统。</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl">
                      <h4 className="font-bold text-slate-800">材料科学突破</h4>
                      <p className="text-sm text-slate-500">在 Mini 系列中，大疆使用了定制的高强度、低密度碳纤维复合材料，以在 249g 的极限重量下保持结构刚性。</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 flex flex-col items-center justify-center">
                   <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={RD_CORE_TECHS}>
                        <PolarGrid stroke="#e2e8f0" />
                        <PolarAngleAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 10 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar name="DJI" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {HARDWARE_RD_DATA.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:border-blue-300 transition-all">
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-6">{item.detail}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.metrics.map((m, mi) => (
                      <span key={mi} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">{m}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'competitors':
        return (
          <div className="space-y-10 animate-fadeIn">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-3xl font-bold mb-8 text-slate-900">行业竞争格局：大疆与追赶者</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-100">
                      <th className="py-4 font-bold text-slate-400 uppercase text-xs">厂商</th>
                      <th className="py-4 font-bold text-slate-400 uppercase text-xs">总部</th>
                      <th className="py-4 font-bold text-slate-400 uppercase text-xs">核心焦点</th>
                      <th className="py-4 font-bold text-slate-400 uppercase text-xs">核心优势</th>
                      <th className="py-4 font-bold text-slate-400 uppercase text-xs">行业定位</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPETITOR_COMPARISON.map((comp, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="py-6 font-bold text-slate-900 flex items-center">
                          <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: comp.color }}></div>
                          {comp.company}
                        </td>
                        <td className="py-6 text-slate-500">{comp.origin}</td>
                        <td className="py-6 text-slate-600 text-sm font-medium">{comp.focus}</td>
                        <td className="py-6 text-slate-500 text-sm italic">{comp.techAdvantage}</td>
                        <td className="py-6">
                          <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase rounded-full">
                            {comp.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-8 text-slate-900 flex items-center">
                  <span className="w-1 h-6 bg-blue-600 mr-3 rounded-full"></span> 核心能力量化对比
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    {/* Fixed typo in INDUSTRY_METRICS_CHART */}
                    <BarChart data={INDUSTRY_METRICS_CHART}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="metric" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                      <YAxis axisLine={false} tickLine={false} hide />
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                      />
                      <Legend verticalAlign="top" height={36} />
                      <Bar dataKey="DJI" fill="#1e293b" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Skydio" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Autel" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-slate-50 p-10 rounded-3xl flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-6 text-slate-900">核心博弈点分析</h4>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center font-bold text-blue-600">1</div>
                    <p className="text-slate-600 text-sm leading-relaxed"><strong>AI vs 硬件平衡：</strong>Skydio 在软件避障算法上领先，但大疆在 Mavic 3 Pro 后通过集成 NPU 已经基本抹平了差距，且图传与影像优势巨大。</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center font-bold text-emerald-600">2</div>
                    <p className="text-slate-600 text-sm leading-relaxed"><strong>政务市场割裂：</strong>受 NDAA 影响，大疆正通过“数据本地模式”和极高的性价比巩固其在非敏感商业领域的绝对优势。</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'future':
        return (
          <div className="space-y-10 animate-fadeIn">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-3xl font-bold mb-10 text-slate-900">深耕垂直行业：天空中的新基建</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {INDUSTRY_VERTICALS.map((vertical, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{vertical.icon}</div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{vertical.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{vertical.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-900 p-10 rounded-3xl text-white">
                <h4 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> 未来硬件研发重点
                </h4>
                <div className="space-y-8">
                  {FUTURE_RD_FOCUS.hardware.map((item, i) => (
                    <div key={i}>
                      <h5 className="text-blue-400 font-bold mb-2">{item.title}</h5>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-600 p-10 rounded-3xl text-white">
                <h4 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span> 未来软件研发重点
                </h4>
                <div className="space-y-8">
                  {FUTURE_RD_FOCUS.software.map((item, i) => (
                    <div key={i}>
                      <h5 className="text-white font-bold mb-2 underline underline-offset-4">{item.title}</h5>
                      <p className="text-blue-100 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-2xl font-bold mb-6 text-slate-900">大疆未来的“星辰大海”</h4>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                大疆的产品演进路径正清晰地从<strong>“航拍相机”</strong>转向<strong>“空间智能终端”</strong>。未来的大疆不仅关注无人机本身，更关注其背后的数据价值。通过 DJI FlyCart 进军低空物流，通过 DJI Automotive 进军智能驾驶，大疆正利用其在小型化算力平台和感知系统上的优势，试图定义“自动化”的下半场。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-blue-50 text-blue-700 rounded-2xl font-bold text-sm">#低空经济</div>
                <div className="px-6 py-3 bg-emerald-50 text-emerald-700 rounded-2xl font-bold text-sm">#工业4.0</div>
                <div className="px-6 py-3 bg-amber-50 text-amber-700 rounded-2xl font-bold text-sm">#智能驾驶</div>
              </div>
            </div>
          </div>
        );

      case 'history':
        return (
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 animate-fadeIn">
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">崛起之路：技术复利的力量</h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative border-l-4 border-slate-100 ml-6 space-y-16">
                {HISTORY_EVENTS.map((event, idx) => (
                  <div key={idx} className="relative pl-12">
                    <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-sm"></div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                      <span className="text-lg font-black text-blue-600">{event.year}</span>
                      <h4 className="text-2xl font-bold text-slate-800">{event.title}</h4>
                    </div>
                    <p className="text-slate-500 mt-3 text-lg leading-relaxed">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'products':
        return (
          <div className="space-y-10 animate-fadeIn">
            <div className="flex justify-between items-end">
              <h3 className="text-3xl font-bold text-slate-900">全场景产品矩阵</h3>
              <p className="text-slate-500 text-sm">覆盖消费、专业、工业、农业四大核心板块</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {PRODUCTS.map(product => (
                <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <div className="h-56 overflow-hidden relative">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur text-blue-600 text-xs font-bold rounded-full shadow-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-xl font-bold text-slate-800">{product.name}</h4>
                      <span className="text-slate-400 font-medium text-sm">{product.year}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="space-y-10 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-8 text-slate-900 flex items-center">
                  <span className="w-1 h-6 bg-blue-600 mr-3 rounded-full"></span> 2023 全球市占率分布
                </h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={MARKET_SHARE_DATA}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {MARKET_SHARE_DATA.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36}/>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-8 text-slate-900 flex items-center">
                  <span className="w-1 h-6 bg-indigo-600 mr-3 rounded-full"></span> 营收增长规模 (EST)
                </h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={GROWTH_DATA}>
                      <defs>
                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="year" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" name="Revenue (Billion RMB)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-8">分区域市场投放策略与成因分析</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REGIONAL_STRATEGY.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.region}</h4>
                  <p className="text-blue-600 text-sm font-bold mb-4">{item.strategy}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'strategy':
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-4xl font-extrabold mb-6 tracking-tight">大疆核心护城河：垂直整合</h3>
                <p className="text-xl text-slate-400 leading-relaxed mb-8">
                  不同于手机行业的“方案整合商”，大疆实现了从底层芯片、通讯协议到光学系统的全链条闭传。这使其产品迭代周期比对手快50%以上。
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                <h4 className="text-2xl font-bold mb-6 text-slate-900">1. 技术平移战略</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  大疆将原本昂贵的军工级飞控和视觉算法“消费化”。其沉淀的避障和稳定技术已成功迁移至车载自动驾驶和大疆车载系统。
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                <h4 className="text-2xl font-bold mb-6 text-slate-900">2. 生态位卡位</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  大疆正从“卖产品”转向“卖服务/平台”。通过开放SDK，大疆无人机变成了工业、基建和农业的底层基础设施。
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <header className="sticky top-0 z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => setActiveTab('overview')}>
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <span className="text-white font-black text-xl">D</span>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">DJI Insights</h1>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mt-1">Deep Analysis Report</p>
              </div>
            </div>
            <nav className="hidden lg:flex space-x-6">
              {(['overview', 'history', 'rnd', 'products', 'market', 'competitors', 'future', 'strategy'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-bold transition-all relative py-2 ${
                    activeTab === tab ? 'text-blue-600' : 'text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {tab === 'overview' ? '首页概况' : 
                   tab === 'history' ? '崛起历程' : 
                   tab === 'rnd' ? '硬核研发' : 
                   tab === 'products' ? '核心产品' : 
                   tab === 'market' ? '市场策略' : 
                   tab === 'competitors' ? '行业对比' : 
                   tab === 'future' ? '未来展望' : '战略分析'}
                  {activeTab === tab && <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></span>}
                </button>
              ))}
            </nav>
            <button className="hidden sm:block bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition-colors">
              下载报告
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 lg:px-12 py-16">
        {renderSection()}
      </main>

      <footer className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-slate-500">
          <div className="col-span-2">
            <h4 className="text-xl font-bold mb-6 text-slate-900">关于本报告</h4>
            <p className="text-base leading-relaxed max-w-md">
              本报告由高级行业分析系统生成，使用 <strong>Gemini 3 Pro</strong> 提供深度技术研判。数据截止至 2024 年 Q1。
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-900">核心优势</h4>
            <ul className="space-y-4 text-sm">
              <li>垂直整合 (Vertical Integration)</li>
              <li>生态卡位 (Ecosystem Strategy)</li>
              <li>端侧AI (Edge AI)</li>
              <li>材料科学 (Materials Science)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-900">法律声明</h4>
            <p className="text-xs leading-relaxed">
              DJI 是大疆创新的注册商标。本报告仅供学术及参考，数据基于公开披露信息及 AI 深度分析测算。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
