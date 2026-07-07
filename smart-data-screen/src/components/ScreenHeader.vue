<template>
  <header class="screen-header">
    <div class="screen-header__side">DATA TEACHING DEMO</div>
    <div class="screen-header__title">
      <h1>如意数据大屏 <span>RuyiBigScreen</span></h1>
      <p>纯前端 · Mock 数据 · Vue 3 + ECharts 教学项目</p>
    </div>
    <time class="screen-header__time">{{ currentTime }}</time>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const currentTime = ref('')
let timer = 0

const updateTime = () => {
  currentTime.value = new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date())
}

onMounted(() => {
  updateTime()
  timer = window.setInterval(updateTime, 1000)
})

onBeforeUnmount(() => window.clearInterval(timer))
</script>

<style scoped>
.screen-header {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  height: 104px;
  padding: 0 34px;
  background: linear-gradient(180deg, rgb(20 55 103 / 80%), rgb(7 16 38 / 2000%));
}

.screen-header::after {
  position: absolute;
  right: 220px;
  bottom: 0;
  left: 220px;
  height: 1px;
  content: '';
  background: linear-gradient(90deg, transparent, #35d9ff, #4affd2, transparent);
  box-shadow: 0 0 18px #35d9ff;
}

.screen-header__title {
  text-align: center;
}

.screen-header h1 {
  margin: 0;
  font-size: 42px;
  font-weight: 800;
  color: #f5fdff;
  letter-spacing: 4px;
  text-shadow: 0 0 22px rgb(54 218 255 / 45%);
}

.screen-header h1 span {
  font-size: 24px;
  color: #67ffe0;
  letter-spacing: 1px;
}

.screen-header p,
.screen-header__side,
.screen-header__time {
  margin: 0;
  font-size: 15px;
  color: #9fd4e9;
}

.screen-header__time {
  justify-self: end;
  font-family: Consolas, monospace;
  color: #e8fbff;
}
</style>
