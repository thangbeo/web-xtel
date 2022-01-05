import Vue from 'vue'
import Notifications from 'vue-notification'
import vueXlsxTable from 'vue-xlsx-table'
import VueLogger from 'vuejs-logger'
import VueApexCharts from 'vue-apexcharts'
import GoTop from '@inotom/vue-go-top'

const isProduction = process.env.NODE_ENV === 'production'

const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
}
Vue.component('GoTop', GoTop)
Vue.use(VueLogger, options)
Vue.use(Notifications)
Vue.use(vueXlsxTable, {
  rABS: false
})
Vue.component('apexchart', VueApexCharts)