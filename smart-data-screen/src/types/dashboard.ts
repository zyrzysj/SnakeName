export interface SummaryMetric {
  key: string
  label: string
  value: number
  unit: string
  change: number
  status: 'good' | 'warning' | 'critical'
}

export interface TrendPoint {
  time: string
  visits: number
  orders: number
}

export interface CategoryItem {
  name: string
  value: number
}

export interface RankingItem {
  city: string
  value: number
}

export interface RadarItem {
  name: string
  value: number
  max: number
}

export interface ActivityItem {
  id: string
  time: string
  type: 'info' | 'success' | 'warning' | 'error'
  content: string
}

export interface MapNode {
  name: string
  value: [number, number, number]
}

export interface DashboardData {
  metrics: SummaryMetric[]
  trend: TrendPoint[]
  categories: CategoryItem[]
  ranking: RankingItem[]
  radar: RadarItem[]
  activities: ActivityItem[]
  mapNodes: MapNode[]
}
