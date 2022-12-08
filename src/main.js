import { createApp } from 'vue'
import App from './App.vue'
import SlideUpDown from 'vue3-slide-up-down'

createApp(App).component('slide-up-down', SlideUpDown).mount('#app')
