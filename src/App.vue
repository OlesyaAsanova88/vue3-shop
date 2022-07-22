<template>
	<div class="app-grid">
		<header>
			<div class="container py-3 mb-4 border-bottom">
				<div class="row">
					<div class="col col-sm-9">
						<h1 class="text-white" >Super shop</h1>
					</div>
					<div class="col col-sm-3">
						<div class="alert alert-default">
							<div class="text-white">In Cart: {{ count }}</div>
							<div class="text-white">Total: {{ total }}</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<div>
			<div class="container">
				<div class="row">
					<div class="col col-12 col-md-3">
						<ul class="nav nav-pills flex-column mb-auto">
							<li v-for="item,i in menu" :key="i" class="nav-item">
								<router-link :to="{ name: item.route }" class="nav-link text-white">{{ item.title }}</router-link>
							</li>
						</ul>
					</div>
					<main class="col col-12 col-md-9">
						<router-view />
					</main>
				</div>
			</div>
		</div>
		<footer class="py-3 m4-3 border-top">
			<div class="container text-white">
				footer
			</div>
		</footer>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
	data(){
		return {
			menu: [
				{ route: 'home', title: 'Home' },
				{ route: 'cart', title: 'Cart' },
				{ route: 'order', title: 'Checkout' }
			]
		}
	},
	computed: {
		...mapGetters('cart', ['count', 'total'])
	}
}
</script>