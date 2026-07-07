import { describe, expect, it } from 'vitest'
import { dashboardService } from '../../services/dashboardService'

describe('dashboardService', () => {
  it('returns dashboard data in mock mode', async () => {
    const data = await dashboardService.getDashboardData()

    expect(data.metrics.length).toBeGreaterThan(0)
    expect(data.trend.length).toBeGreaterThan(0)
    expect(data.activities.length).toBeGreaterThan(0)
    expect(data.mapNodes.length).toBeGreaterThan(0)
  })
})
