<template>
  <BigScreenLayout>
    <ScreenHeader />
    <main v-if="data" class="dashboard-view">
      <section class="dashboard-view__metrics">
        <MetricCard v-for="metric in data.metrics" :key="metric.key" :metric="metric" />
      </section>

      <section class="dashboard-view__grid">
        <div class="dashboard-view__left">
          <BasePanel title="访问趋势" subtitle="Visits & Orders">
            <LineTrendChart :data="data.trend" />
          </BasePanel>
          <BasePanel title="分类占比" subtitle="Category Share">
            <PieStatusChart :data="data.categories" />
          </BasePanel>
        </div>

        <BasePanel title="中心态势总览" subtitle="Nationwide Overview">
          <MapOverviewChart :data="data.mapNodes" />
        </BasePanel>

        <div class="dashboard-view__right">
          <BasePanel title="城市排名" subtitle="City Ranking">
            <BarRankingChart :data="data.ranking" />
          </BasePanel>
          <BasePanel title="平台能力" subtitle="Ability Radar">
            <RadarAbilityChart :data="data.radar" />
          </BasePanel>
        </div>
      </section>

      <BasePanel title="实时动态" subtitle="Live Activity">
        <ul class="activity-list">
          <li v-for="activity in data.activities" :key="activity.id" :class="`is-${activity.type}`">
            <time>{{ activity.time }}</time>
            <span>{{ activity.content }}</span>
          </li>
        </ul>
      </BasePanel>
    </main>
    <div v-else class="dashboard-view__loading">{{ store.error || '如意数据大屏加载中...' }}</div>
  </BigScreenLayout>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import BasePanel from '../components/BasePanel.vue'
import MetricCard from '../components/MetricCard.vue'
import ScreenHeader from '../components/ScreenHeader.vue'
import BarRankingChart from '../charts/BarRankingChart.vue'
import LineTrendChart from '../charts/LineTrendChart.vue'
import MapOverviewChart from '../charts/MapOverviewChart.vue'
import PieStatusChart from '../charts/PieStatusChart.vue'
import RadarAbilityChart from '../charts/RadarAbilityChart.vue'
import BigScreenLayout from '../layouts/BigScreenLayout.vue'
import { useDashboardStore } from '../stores/dashboardStore'

const store = useDashboardStore()
const data = computed(() => store.data)

onMounted(() => {
  void store.fetchDashboard()
})
</script>

<style scoped>
.dashboard-view {
  display: grid;
  grid-template-rows: 120px 1fr 178px;
  gap: 18px;
  height: calc(100% - 104px);
  padding: 18px 28px 26px;
  box-sizing: border-box;
}

.dashboard-view__metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.dashboard-view__grid {
  display: grid;
  grid-template-columns: 470px 1fr 470px;
  gap: 18px;
  min-height: 0;
}

.dashboard-view__left,
.dashboard-view__right {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 18px;
  min-height: 0;
}

.activity-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.activity-list li {
  min-height: 84px;
  padding: 16px;
  background: rgb(9 28 61 / 74%);
  border: 1px solid rgb(90 220 255 / 20%);
  border-radius: 14px;
}

.activity-list time {
  display: block;
  margin-bottom: 10px;
  font-family: Consolas, monospace;
  color: #67ffe0;
}

.activity-list span {
  font-size: 15px;
  line-height: 1.55;
  color: #d9f8ff;
}

.activity-list .is-warning {
  border-color: rgb(255 209 102 / 40%);
}

.activity-list .is-error {
  border-color: rgb(255 122 162 / 40%);
}

.activity-list .is-success {
  border-color: rgb(103 255 224 / 40%);
}

.dashboard-view__loading {
  display: grid;
  height: calc(100% - 104px);
  place-items: center;
  font-size: 28px;
  color: #67ffe0;
}
</style>
