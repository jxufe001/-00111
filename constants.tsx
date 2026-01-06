
import { HistoryEvent, Product, MarketData } from './types';

export const HISTORY_EVENTS: HistoryEvent[] = [
  { year: '2006', title: '大疆成立', description: '汪滔在香港科技大学宿舍创立大疆，最初专注于直升机飞行控制系统。' },
  { year: '2009', title: '飞控领跑', description: 'XP3.1等系统在航模圈成名，大疆确立了在飞行稳定技术领域的领先地位。' },
  { year: '2012', title: 'Phantom 1 发布', description: '全球首款“到手即飞”的消费级无人机，彻底改变了行业门槛，开启航拍时代。' },
  { year: '2015', title: '垂直整合', description: '推出自主研发的增稳云台及4K相机，摆脱对GoPro的依赖，实现影像技术完全自研。' },
  { year: '2017', title: '哈苏并购', description: '正式控股顶级相机品牌哈苏（Hasselblad），从底层光学设计强化高端影像竞争力。' },
  { year: '2021-2024', title: '工业与车载转型', description: 'Matrice系列与大疆车载业务爆发，标志着从单一航拍工具向空间智能服务商转型。' }
];

export const PRODUCTS: Product[] = [
  { id: '1', name: 'Mavic 3 Pro', category: 'Consumer', year: '2023', description: '全球首款三摄航拍机，搭载哈苏镜头，定义消费级影像天花板。', imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800' },
  { id: '2', name: 'DJI Inspire 3', category: 'Professional', year: '2023', description: '一体化8K全画幅电影无人机，支持RTK高精度定位，电影工业标配。', imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?auto=format&fit=crop&q=80&w=800' },
  { id: '3', name: 'Matrice 350 RTK', category: 'Enterprise', year: '2023', description: '旗舰级工业平台，55分钟长航时，支持六向定向避障与多负载。', imageUrl: 'https://images.unsplash.com/photo-1527977966376-1c841de9d21a?auto=format&fit=crop&q=80&w=800' },
  { id: '4', name: 'Agras T60', category: 'Agriculture', year: '2024', description: '大疆农业旗舰，50公斤喷洒载重，每小时作业效率提升至300亩以上。', imageUrl: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&q=80&w=800' },
  { id: '5', name: 'Osmo Pocket 3', category: 'Consumer', year: '2023', description: '1英寸CMOS云台相机，横竖屏一键切换，现象级Vlog创作工具。', imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800' }
];

export const MARKET_SHARE_DATA: MarketData[] = [
  { name: 'DJI (大疆)', value: 72 },
  { name: 'Autel (道通)', value: 7 },
  { name: 'Skydio', value: 5 },
  { name: 'Parrot', value: 4 },
  { name: '其他', value: 12 }
];

export const COMPETITOR_COMPARISON = [
  {
    company: 'DJI (大疆)',
    origin: '中国',
    focus: '全产业链/消费+工业',
    techAdvantage: '垂直整合、极致图传、云台系统',
    status: '行业统治者',
    color: '#1e293b'
  },
  {
    company: 'Skydio',
    origin: '美国',
    focus: '视觉AI/自动驾驶/政务',
    techAdvantage: '自主飞行AI、避障算法、NDAA合规',
    status: '技术追赶者',
    color: '#3b82f6'
  },
  {
    company: 'Autel Robotics',
    origin: '中国',
    focus: '消费级/高端航拍',
    techAdvantage: '高像素传感器、长航时、抗干扰',
    status: '硬件挑战者',
    color: '#10b981'
  },
  {
    company: 'Parrot',
    origin: '法国',
    focus: '政务/商业安全/测绘',
    techAdvantage: '数据加密、开放SDK、4G/5G连接',
    status: '利基领先者',
    color: '#f59e0b'
  },
  {
    company: '极飞科技 (XAG)',
    origin: '中国',
    focus: '智慧农业',
    techAdvantage: '全自主农业机器人、精准离心喷洒',
    status: '细分领域对手',
    color: '#8b5cf6'
  }
];

export const INDUSTRY_METRICS_CHART = [
  { metric: '自主避障', DJI: 92, Skydio: 98, Autel: 85, Parrot: 80 },
  { metric: '图传距离', DJI: 99, Skydio: 80, Autel: 90, Parrot: 85 },
  { metric: '影像画质', DJI: 98, Skydio: 75, Autel: 92, Parrot: 88 },
  { metric: '续航效率', DJI: 95, Skydio: 70, Autel: 94, Parrot: 82 },
  { metric: '软件生态', DJI: 96, Skydio: 88, Autel: 70, Parrot: 85 }
];

export const INDUSTRY_VERTICALS = [
  {
    title: '能源巡检',
    description: '通过经纬 Matrice 系列搭载红外和可见光双负载，自动执行输电塔、风机及光伏板巡视，将人工巡检风险降低 90%。',
    icon: '⚡'
  },
  {
    title: '公共安全',
    description: '在搜救、消防和反恐任务中，大疆无人机提供实时航拍图传，协助指挥部进行态势感知和精准部署。',
    icon: '🛡️'
  },
  {
    title: '精准农业',
    description: 'T系列植保无人机实现厘米级精准喷洒，每小时作业效率可达300亩，大幅降低农药使用和人力成本。',
    icon: '🌾'
  },
  {
    title: '测绘与工程',
    description: '利用 DJI Terra (大疆智图) 配合 RTK 模块，实现高精度三维建模，广泛应用于基建监造和自然资源普查。',
    icon: '🏗️'
  }
];

export const FUTURE_RD_FOCUS = {
  hardware: [
    { title: '高能量密度固态电池', detail: '旨在突破当前锂电 30-40 分钟的续航瓶颈，向单次 1 小时以上长航时迈进。' },
    { title: '轻量化多材料融合', detail: '研发新型碳纤维与镁铝合金复合物，进一步优化推重比，提升抗风与载重性能。' },
    { title: '仿生与静音设计', detail: '通过优化桨叶构型和动力冗余，实现极致的静音飞行和更高的故障容错率。' }
  ],
  software: [
    { title: '边缘端端侧大模型', detail: '无需联网，无人机即可自主识别复杂物体（如细小裂纹、异常烟雾）并做出即时响应。' },
    { title: '多机协作群体智能', detail: '实现数十架无人机的编队协作，适用于大面积测绘或协同补给。' },
    { title: '三维实景孪生系统', detail: '进一步整合云端数据流，实现物理世界与数字世界的毫秒级同步更新。' }
  ]
};

export const REGIONAL_STRATEGY = [
  {
    region: '北美市场',
    strategy: '高端影像 & 极客社区',
    reason: '由于北美拥有成熟的电影工业和庞大的户外探险文化，大疆在此侧重通过Inspire和Mavic系列确立“高端生产力工具”形象，通过与顶级摄影师合作建立口碑。',
    icon: '🇺🇸'
  },
  {
    region: '中国/亚太',
    strategy: '产业集成 & 智慧农业',
    reason: '利用中国领先的农业现代化政策和基建需求，大疆重点推行T系列植保机和Matrice巡检方案。通过完善的售后维修网点和低成本供应链快速渗透下沉市场。',
    icon: '🇨🇳'
  },
  {
    region: '欧洲市场',
    strategy: '隐私合规 & 创意生活',
    reason: '欧洲用户对个人隐私极其敏感，大疆在此强调数据安全合规（Local Data Mode），并利用Osmo系列和Mini系列主打短视频社交、生活记录等创意场景。',
    icon: '🇪🇺'
  }
];

export const HARDWARE_RD_DATA = [
  {
    title: '自研专用SoC与NPU',
    detail: '为了在毫秒级处理全向避障数据，大疆定制了集成ISP、图像传输算法和深度学习推理核心的系统级芯片，显著优于通用移动平台。',
    metrics: ['双路红外+四路视觉流', '超低功耗AI推理']
  },
  {
    title: 'FOC正弦波电调系统',
    detail: 'Field Oriented Control（磁场定向控制）技术。相比传统的方波驱动，大疆自研电调能提供更线性的动力输出，降低噪音并提升15%以上的动力效率。',
    metrics: ['动态电机力矩补偿', '能量回馈制动']
  },
  {
    title: '高精度无刷云台电机',
    detail: '定制的高磁导率磁钢与超细绕线工艺。通过毫秒级的PID控制闭环，实现机械增稳精度达 ±0.005°，有效过滤无人机高频震动。',
    metrics: ['±0.005° 稳定度', '三轴独立闭环控制']
  },
  {
    title: 'SDR 软件定义无线电图传',
    detail: 'OcuSync 系统采用 SDR 架构，支持自适应频率切换（跳频）和更高效的信道编码，在城市复杂干扰环境下仍能保持极高的链接可靠性。',
    metrics: ['20km 传输半径', '低至 30ms 延迟']
  }
];

export const RD_CORE_TECHS = [
  { name: '飞控算法', value: 98, description: '自研鲁棒控制算法，实现极端环境下的稳定悬停与高精度轨迹跟随。' },
  { name: '图传系统', value: 95, description: 'OcuSync 4.0技术，支持20公里超远距离低延迟高清画面传输。' },
  { name: '云台增稳', value: 99, description: '高精度无刷电机直驱，机械增稳精度达±0.005°，电影级稳定度。' },
  { name: '避障视觉', value: 92, description: '全向多目视觉系统 + 激光雷达融合，实现复杂环境下的自动路径规划。' },
  { name: '光学系统', value: 90, description: '与哈苏深度整合，自研HNCS色彩科学及超大感光元件适配。' }
];

export const GROWTH_DATA = [
  { year: '2019', revenue: 25.7 },
  { year: '2020', revenue: 30.2 },
  { year: '2021', revenue: 35.8 },
  { year: '2022', revenue: 42.1 },
  { year: '2023', revenue: 48.5 }
];
