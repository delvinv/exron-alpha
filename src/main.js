/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
app.use(PrimeVue)

import Button from 'primevue/button'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';

// eslint-disable-next-line vue/no-reserved-component-names
app.component('Button', Button);
app.component('DataTable',DataTable);
app.component('Column',Column);
app.component('ColumnGroup',ColumnGroup);
app.component('Row',Row);
app.component('InputText',InputText);
app.component('InputNumber',InputNumber);

app.mount('#app')
