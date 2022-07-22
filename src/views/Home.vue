<template>
	<div>
		<h1 class="text-white">Products</h1>
		<div class="row">
			<div class="col col-sm-4 mb-3 mt-3" v-for="pr in products" :key="pr.id">
				<div class="card">
					<div class="card-body">
						<img src="data:image/jpeg;base64,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" alt="">
						<h3>{{ pr.title }}</h3>
						<div>{{ pr.price }}</div>
						<router-link class="text-info" :to="{ name: 'product', params: { id: pr.id } }">Read more</router-link>
						<hr>
						<button v-if="inCart(pr.id)" type="button" @click="remove(pr.id)" class="btn btn-danger">
							Remove
						</button>
						<button v-else type="button" @click="add(pr.id)" class="btn btn-info">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters('products', { products: 'all' }),
		...mapGetters('cart', [ 'inCart' ])
	},
	methods: {
		...mapActions('cart', [ 'add', 'remove' ])
	}	
}
</script>