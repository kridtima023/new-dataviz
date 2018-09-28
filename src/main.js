import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCharts from 'vue-chartjs'
import { Bar, Line, Doughnut } from 'vue-chartjs'
import JsonExcel from 'vue-json-excel'

Vue.use(BootstrapVue,VueCharts,Bar,Line,Doughnut);
Vue.component('downloadExcel', JsonExcel)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

