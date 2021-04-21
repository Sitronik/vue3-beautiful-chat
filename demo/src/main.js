import * as Vue from 'vue'
import App from './App.vue'
import Chat from '../../dist/vue3-beautiful-chat.umd.min.js'

const app = Vue.createApp(App)

app.use(Chat)

app.mount('#app')
