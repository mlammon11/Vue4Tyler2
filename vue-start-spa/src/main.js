import { createApp } from "vue";
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events'

const app = createApp(App)

//Adding $bus to global properties which applies it to every component
app.config.globalProperties.$bus = $bus

app.mount('#app');