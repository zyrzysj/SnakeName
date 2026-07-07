import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import '../style.css'

const bootstrap = async () => {
  if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MSW === 'true') {
    const { worker } = await import('../mocks/browser')
    await worker.start({ onUnhandledRequest: 'bypass' })
  }

  createApp(App).use(createPinia()).mount('#app')
}

void bootstrap()
