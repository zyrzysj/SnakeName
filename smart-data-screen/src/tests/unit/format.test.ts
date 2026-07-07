import { describe, expect, it } from 'vitest'
import {
  formatMetricValue,
  formatNumber,
  formatPercent,
  formatSignedChange,
} from '../../utils/format'

describe('format utils', () => {
  it('formats number with zh-CN separators', () => {
    expect(formatNumber(128936)).toBe('128,936')
  })

  it('formats percent and signed changes', () => {
    expect(formatPercent(0.987)).toBe('98.7%')
    expect(formatSignedChange(12.8)).toBe('+12.8%')
    expect(formatSignedChange(-0.4)).toBe('-0.4%')
  })

  it('formats metric values with unit', () => {
    expect(formatMetricValue(98.7, '%')).toBe('98.7%')
  })
})
