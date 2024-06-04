import { createApp } from "vue";
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import router from './routes';
import $pages from './data';

const app = createApp(App)

//passes plugin
app.use(router);

//Adding $bus to global properties which applies it to every component
//app.config.globalProperties.$bus = $bus;
//app.config.globalProperties.$pages = $pages;

app.provide('$bus', $bus); //provides the injection to be used in child components without chain "propping" from root to deep child https://vuejs.org/guide/components/provide-inject
app.provide('$pages', $pages); // (key, value)

app.mount('#app');