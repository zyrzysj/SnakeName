import { defineStore } from 'pinia'
import { dashboardService } from '../services/dashboardService'
import type { DashboardData } from '../types/dashboard'
import { logger } from '../logs/logger'

interface DashboardState {
  data: DashboardData | null
  loading: boolean
  error: string | null
}

export const useDashboardStore = defineStore('dashboard', {
  state: (): DashboardState => ({
    data: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchDashboard() {
      this.loading = true
      this.error = null
      try {
        this.data = await dashboardService.getDashboardData()
        logger.info('Dashboard data loaded')
      } catch (error) {
        this.error = error instanceof Error ? error.message : '数据加载失败'
        logger.error('Dashboard data load failed', error as Error)
      } finally {
        this.loading = false
      }
    },
  },
})
