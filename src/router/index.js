import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue';
import Cart from '@/views/Cart.vue';
import Product from '@/views/Product.vue';
import Order from '@/views/Order.vue';
import Page404 from '@/views/Page404.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/cart',
		name: 'cart',
		component: Cart
	},
	{
		path: '/product/:id',
		name: 'product',
		component: Product
	},
	{
		path: '/order',
		name: 'order',
		component: Order
	},
	{
		path: '/:any(.*)',
		component: Page404
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
