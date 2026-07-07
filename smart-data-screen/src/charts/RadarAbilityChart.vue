<template>
  <div ref="chartRef" class="chart" data-testid="radar-chart"></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { echarts, type RadarChartOption } from './echartsRadar'
import type { RadarItem } from '../types/dashboard'

const props = defineProps<{ data: RadarItem[] }>()
const chartRef = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null

const renderChart = () => {
  if (!chartRef.value) return
  chart ??= echarts.init(chartRef.value)
  const option: RadarChartOption = {
    tooltip: {},
    radar: {
      radius: '68%',
      indicator: props.data.map((item) => ({ name: item.name, max: item.max })),
      axisName: { color: '#d9f8ff' },
      splitLine: { lineStyle: { color: 'rgba(120, 210, 255, 0.18)' } },
      splitArea: { areaStyle: { color: ['rgba(53,217,255,0.03)', 'rgba(103,255,224,0.06)'] } },
      axisLine: { lineStyle: { color: 'rgba(120, 210, 255, 0.2)' } },
    },
    series: [
      {
        name: '平台能力',
        type: 'radar',
        data: [
          {
            value: props.data.map((item) => item.value),
            name: '能力指数',
            areaStyle: { color: 'rgba(103, 255, 224, 0.22)' },
            lineStyle: { color: '#67ffe0', width: 3 },
            itemStyle: { color: '#35d9ff' },
          },
        ],
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
