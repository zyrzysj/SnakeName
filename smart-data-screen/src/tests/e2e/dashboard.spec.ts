import { expect, test } from '@playwright/test'

test('renders RuyiBigScreen dashboard', async ({ page }) => {
  const seriousErrors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') seriousErrors.push(message.text())
  })

  await page.goto('/')
  await expect(page.getByRole('heading', { name: /如意数据大屏/ })).toBeVisible()
  await expect(page.getByTestId('metric-card').first()).toBeVisible()
  await expect(page.getByTestId('trend-chart')).toBeVisible()
  await expect(page.getByTestId('map-chart')).toBeVisible()
  await expect(page.locator('body')).not.toBeEmpty()
  expect(seriousErrors).toEqual([])
})
