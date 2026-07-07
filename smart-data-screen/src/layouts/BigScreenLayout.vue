<template>
  <div ref="screenRef" class="big-screen-layout">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useScaleToFit } from '../utils/resize'

const screenRef = ref<HTMLElement | null>(null)
const { updateScale } = useScaleToFit()

const resize = () => updateScale(screenRef.value)

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
})

onBeforeUnmount(() => window.removeEventListener('resize', resize))
</script>

<style scoped>
.big-screen-layout {
  position: fixed;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  color: #d9f8ff;
  background:
    linear-gradient(rgb(72 255 212 / 3.5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(72 255 212 / 3.5%) 1px, transparent 1px),
    radial-gradient(circle at 50% 0%, rgb(37 99 235 / 32%), transparent 35%), #030914;
  background-size:
    48px 48px,
    48px 48px,
    auto,
    auto;
}
</style>
