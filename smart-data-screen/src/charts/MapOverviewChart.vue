<template>
  <div class="map-overview" data-testid="map-chart">
    <div class="map-overview__rings">
      <span
        v-for="node in data"
        :key="node.name"
        class="map-overview__node"
        :style="nodeStyle(node)"
      >
        <b>{{ node.name }}</b>
        <em>{{ node.value[2] }}</em>
      </span>
    </div>
    <div class="map-overview__core">
      <strong>{{ total }}</strong>
      <span>全国态势热力总览</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MapNode } from '../types/dashboard'
import { formatNumber } from '../utils/format'

const props = defineProps<{ data: MapNode[] }>()
const total = computed(() => formatNumber(props.data.reduce((sum, node) => sum + node.value[2], 0)))

const positions = [
  { left: '55%', top: '25%' },
  { left: '66%', top: '52%' },
  { left: '58%', top: '63%' },
  { left: '72%', top: '72%' },
  { left: '36%', top: '68%' },
]

const nodeStyle = (node: MapNode) =>
  positions[props.data.findIndex((item) => item.name === node.name)]
</script>

<style scoped>
.map-overview {
  position: relative;
  height: 100%;
  min-height: 478px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 48%, rgb(53 217 255 / 20%), transparent 32%),
    radial-gradient(circle at 50% 48%, rgb(103 255 224 / 12%), transparent 48%);
  border-radius: 18px;
}

.map-overview__rings {
  position: absolute;
  inset: 38px;
  border: 1px solid rgb(53 217 255 / 18%);
  border-radius: 50%;
  animation: pulse 5s linear infinite;
}

.map-overview__rings::before,
.map-overview__rings::after {
  position: absolute;
  inset: 68px;
  content: '';
  border: 1px dashed rgb(103 255 224 / 22%);
  border-radius: 50%;
}

.map-overview__rings::after {
  inset: 134px;
  border-style: solid;
}

.map-overview__node {
  position: absolute;
  display: grid;
  place-items: center;
  width: 82px;
  height: 82px;
  color: #eaffff;
  background: radial-gradient(
    circle,
    rgb(103 255 224 / 35%),
    rgb(36 123 255 / 22%) 62%,
    transparent 64%
  );
  border: 1px solid rgb(103 255 224 / 50%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.map-overview__node b,
.map-overview__node em {
  font-style: normal;
  line-height: 1;
}

.map-overview__node em {
  color: #67ffe0;
}

.map-overview__core {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  place-items: center;
  width: 230px;
  height: 230px;
  color: #eaffff;
  background: radial-gradient(circle, rgb(53 217 255 / 24%), rgb(3 14 38 / 70%) 68%);
  border: 1px solid rgb(53 217 255 / 45%);
  border-radius: 50%;
  box-shadow: 0 0 42px rgb(53 217 255 / 20%);
  transform: translate(-50%, -50%);
}

.map-overview__core strong {
  font-size: 42px;
  color: #67ffe0;
}

@keyframes pulse {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
