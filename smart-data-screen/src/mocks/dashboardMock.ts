import type { DashboardData } from '../types/dashboard'

export const dashboardMock: DashboardData = {
  metrics: [
    { key: 'visits', label: '今日访问量', value: 128936, unit: '', change: 12.8, status: 'good' },
    { key: 'orders', label: '实时订单数', value: 9432, unit: '', change: 8.6, status: 'good' },
    { key: 'users', label: '活跃用户数', value: 56281, unit: '', change: 5.2, status: 'good' },
    { key: 'health', label: '系统健康度', value: 98.7, unit: '%', change: -0.4, status: 'warning' },
  ],
  trend: [
    { time: '00:00', visits: 1200, orders: 84 },
    { time: '03:00', visits: 1800, orders: 126 },
    { time: '06:00', visits: 3200, orders: 248 },
    { time: '09:00', visits: 8600, orders: 720 },
    { time: '12:00', visits: 13200, orders: 1050 },
    { time: '15:00', visits: 15800, orders: 1320 },
    { time: '18:00', visits: 19100, orders: 1680 },
    { time: '21:00', visits: 17300, orders: 1490 },
  ],
  categories: [
    { name: '教学课程', value: 36 },
    { name: '项目实战', value: 28 },
    { name: '资源下载', value: 18 },
    { name: '社区问答', value: 12 },
    { name: '其他', value: 6 },
  ],
  ranking: [
    { city: '杭州', value: 9860 },
    { city: '上海', value: 8750 },
    { city: '北京', value: 8120 },
    { city: '深圳', value: 7660 },
    { city: '广州', value: 6930 },
    { city: '成都', value: 6120 },
  ],
  radar: [
    { name: '稳定性', value: 96, max: 100 },
    { name: '性能', value: 88, max: 100 },
    { name: '安全', value: 91, max: 100 },
    { name: '扩展性', value: 84, max: 100 },
    { name: '易用性', value: 93, max: 100 },
  ],
  mapNodes: [
    { name: '北京', value: [116.4, 39.9, 8120] },
    { name: '上海', value: [121.47, 31.23, 8750] },
    { name: '杭州', value: [120.16, 30.25, 9860] },
    { name: '深圳', value: [114.05, 22.55, 7660] },
    { name: '成都', value: [104.06, 30.67, 6120] },
  ],
  activities: [
    { id: 'a1', time: '21:42:18', type: 'success', content: '杭州教学节点完成 9860 次访问分发' },
    { id: 'a2', time: '21:39:06', type: 'info', content: '实时订单队列处理耗时低于 120ms' },
    { id: 'a3', time: '21:35:44', type: 'warning', content: '华南节点流量接近预警阈值 82%' },
    { id: 'a4', time: '21:31:12', type: 'success', content: '新增 216 名活跃学习用户' },
    { id: 'a5', time: '21:28:09', type: 'info', content: 'mock 数据源同步完成，可平滑切换 API' },
  ],
}
