<template>
  <section class="base-panel">
    <div class="base-panel__header">
      <h2>{{ title }}</h2>
      <span v-if="subtitle">{{ subtitle }}</span>
    </div>
    <div class="base-panel__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<style scoped>
.base-panel {
  position: relative;
  min-height: 0;
  padding: 18px;
  overflow: hidden;
  background: linear-gradient(145deg, rgb(9 25 54 / 92%), rgb(5 13 31 / 92%));
  border: 1px solid rgb(47 203 255 / 28%);
  border-radius: 18px;
  box-shadow:
    inset 0 0 28px rgb(42 180 255 / 10%),
    0 20px 40px rgb(0 0 0 / 22%);
}

.base-panel::before {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: '';
  background:
    linear-gradient(90deg, rgb(42 214 255 / 40%) 0 52px, transparent 52px) top left / 100% 1px
      no-repeat,
    linear-gradient(90deg, transparent calc(100% - 52px), rgb(67 255 210 / 40%) calc(100% - 52px))
      bottom left / 100% 1px no-repeat;
}

.base-panel__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 12px;
}

.base-panel__header h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #e8fbff;
  letter-spacing: 1px;
}

.base-panel__header span {
  font-size: 12px;
  color: #70a9c8;
}

.base-panel__body {
  height: calc(100% - 34px);
  min-height: 0;
}
</style>
