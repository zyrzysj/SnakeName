<template>
  <div ref="chartRef" class="chart" data-testid="category-chart"></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { echarts, type PieChartOption } from './echartsPie'
import type { CategoryItem } from '../types/dashboard'

const props = defineProps<{ data: CategoryItem[] }>()
const chartRef = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null

const renderChart = () => {
  if (!chartRef.value) return
  chart ??= echarts.init(chartRef.value)
  const option: PieChartOption = {
    color: ['#35d9ff', '#67ffe0', '#8a7cff', '#ffd166', '#ff7aa2'],
    tooltip: { trigger: 'item' },
    legend: { bottom: 0, textStyle: { color: '#a9d7e8' } },
    series: [
      {
        name: '分类占比',
        type: 'pie',
        radius: ['45%', '70%'],
        center: ['50%', '44%'],
        avoidLabelOverlap: true,
        itemStyle: { borderColor: '#071225', borderWidth: 2 },
        label: { color: '#d9f8ff', formatter: '{b}\n{d}%' },
        data: props.data,
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
