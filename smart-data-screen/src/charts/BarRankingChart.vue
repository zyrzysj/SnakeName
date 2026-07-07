<template>
  <div ref="chartRef" class="chart" data-testid="ranking-chart"></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { echarts, type BarChartOption } from './echartsBar'
import type { RankingItem } from '../types/dashboard'

const props = defineProps<{ data: RankingItem[] }>()
const chartRef = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null

const renderChart = () => {
  if (!chartRef.value) return
  chart ??= echarts.init(chartRef.value)
  const option: BarChartOption = {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { top: 14, right: 22, bottom: 24, left: 46 },
    xAxis: {
      type: 'category',
      data: props.data.map((item) => item.city),
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
        type: 'bar',
        barWidth: 18,
        data: props.data.map((item) => item.value),
        itemStyle: {
          borderRadius: [8, 8, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#67ffe0' },
            { offset: 1, color: '#247bff' },
          ]),
        },
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
