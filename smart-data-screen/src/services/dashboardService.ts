import { dashboardMock } from '../mocks/dashboardMock'
import type { DashboardData } from '../types/dashboard'
import { logger } from '../logs/logger'
import { isMockSource } from './dataSource'
import { httpClient } from './http'

export const dashboardService = {
  async getDashboardData(): Promise<DashboardData> {
    if (isMockSource()) {
      logger.debug('Using mock dashboard data source')
      return Promise.resolve(dashboardMock)
    }

    logger.info('Requesting dashboard data from API')
    const { data } = await httpClient.get<DashboardData>('/dashboard')
    return data
  },
}
