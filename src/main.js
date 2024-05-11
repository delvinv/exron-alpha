/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)

import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
app.use(PrimeVue, { ripple: true })

import Ripple from 'primevue/ripple'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row' // optional
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Dropdown from 'primevue/Dropdown'
import Checkbox from 'primevue/checkbox'
import Toolbar from 'primevue/toolbar'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Dialog from 'primevue/dialog'
import Chip from 'primevue/chip'
import DialogService from 'primevue/dialogservice'
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import Calendar from 'primevue/calendar'
import Divider from 'primevue/divider'
import Slider from 'primevue/slider'

// Countdown Timer: https://github.com/fengyuanchen/vue-countdown
import VueCountdown from '@chenfengyuan/vue-countdown'

app.use(ToastService)
app.use(DialogService)

app.directive('ripple', Ripple)

app.component('Button', Button)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('Checkbox', Checkbox)
app.component('Toolbar', Toolbar)
app.component('Toast', Toast)
app.component('Dialog', Dialog)
app.component('Dropdown', Dropdown)
app.component('Chip', Chip)
app.component('Card', Card)
app.component('Panel', Panel)
app.component('Calendar', Calendar)
app.component('Divider', Divider)
app.component('Slider', Slider)
app.component(VueCountdown.name, VueCountdown)

app.mount('#app')
