export const formatNumber = (value: number): string => new Intl.NumberFormat('zh-CN').format(value)

export const formatPercent = (value: number): string => `${(value * 100).toFixed(1)}%`

export const formatMetricValue = (value: number, unit = ''): string =>
  `${formatNumber(value)}${unit}`

export const formatSignedChange = (value: number): string =>
  `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`
