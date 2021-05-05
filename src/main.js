import Vue from 'vue';
import './scss/main.scss';
import App from './App.vue';
import 'nodelist-foreach-polyfill';

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');
