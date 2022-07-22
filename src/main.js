import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


let app = createApp(App).use(store).use(router);

store.dispatch('products/load').then(() => {
	app.mount('#app')
})

store.dispatch('cart/load')

import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/app.css'