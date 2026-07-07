<template>
  <article class="metric-card" data-testid="metric-card">
    <div>
      <p class="metric-card__label">{{ metric.label }}</p>
      <strong>{{ formatMetricValue(metric.value, metric.unit) }}</strong>
    </div>
    <span :class="['metric-card__change', metric.change >= 0 ? 'is-up' : 'is-down']">
      {{ formatSignedChange(metric.change) }}
    </span>
  </article>
</template>

<script setup lang="ts">
import type { SummaryMetric } from '../types/dashboard'
import { formatMetricValue, formatSignedChange } from '../utils/format'

defineProps<{
  metric: SummaryMetric
}>()
</script>

<style scoped>
.metric-card {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  min-height: 96px;
  padding: 18px 20px;
  background:
    radial-gradient(circle at 20% 0%, rgb(45 209 255 / 24%), transparent 42%),
    linear-gradient(135deg, rgb(14 42 82 / 95%), rgb(7 18 43 / 94%));
  border: 1px solid rgb(90 220 255 / 30%);
  border-radius: 18px;
  box-shadow: inset 0 0 30px rgb(73 214 255 / 10%);
}

.metric-card__label {
  margin: 0 0 10px;
  font-size: 15px;
  color: #a9d7e8;
}

.metric-card strong {
  font-family:
    "DIN Alternate",
    Bahnschrift,
    Arial,
    sans-serif;
  font-size: 34px;
  line-height: 1;
  color: #f3feff;
  text-shadow: 0 0 18px rgb(53 218 255 / 38%);
}

.metric-card__change {
  padding: 6px 10px;
  font-size: 14px;
  border-radius: 999px;
}

.metric-card__change.is-up {
  color: #48ffd4;
  background: rgb(72 255 212 / 12%);
}

.metric-card__change.is-down {
  color: #ffd166;
  background: rgb(255 209 102 / 14%);
}
</style>
