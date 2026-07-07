<template>
  <div ref="chartRef" class="chart" data-testid="trend-chart"></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch, ref } from 'vue'
import { echarts, type LineChartOption } from './echartsLine'
import type { TrendPoint } from '../types/dashboard'

const props = defineProps<{ data: TrendPoint[] }>()
const chartRef = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null

const renderChart = () => {
  if (!chartRef.value) return
  chart ??= echarts.init(chartRef.value)
  const option: LineChartOption = {
    color: ['#35d9ff', '#67ffe0'],
    tooltip: { trigger: 'axis' },
    legend: { top: 0, textStyle: { color: '#a9d7e8' } },
    grid: { top: 42, right: 18, bottom: 24, left: 46 },
    xAxis: {
      type: 'category',
      data: props.data.map((item) => item.time),
      axisLabel: { color: '#86b8cf' },
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: 'rgba(120, 210, 255, 0.12)' } },
      axisLabel: { color: '#86b8cf' },
    },
    series: [
      {
        name: '访问量',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        lineStyle: { width: 3 },
        areaStyle: { opacity: 0.16 },
        data: props.data.map((item) => item.visits),
      },
      {
        name: '订单数',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        lineStyle: { width: 3 },
        data: props.data.map((item) => item.orders),
      },
    ],
  }
  chart.setOption(option)
}

const resize = () => chart?.resize()

onMounted(() => {
  renderChart()
  window.addEventListener('resize', resize)
})

watch(() => props.data, renderChart, { deep: true })
onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
  chart?.dispose()
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
  min-height: 210px;
}
</style>
