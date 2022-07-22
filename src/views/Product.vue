<template>
	<div v-if="hasProduct">
		<h1 class="text-white">{{ product.title }}</h1>
		<span class="text-white">Back to products</span>
		<hr >
		<div class="alert alert-success">
			{{ product.price }}
		</div>
	</div>
	<app-404 v-else />
</template>

<script>
import { mapGetters } from 'vuex';
import App404 from '@/components/E404.vue';

export default {
	components: {
		App404
	},
	computed: {
		...mapGetters('products', { getItem: 'item' }),
		routeId(){
			return this.$route.params.id;
		},
		validId(){
			return /^[1-9]+\d*$/.test(this.routeId);
		},
		id(){
			return +this.routeId;
		},
		product(){
			return this.getItem(this.id);
		},
		hasProduct(){
			return this.validId && this.product !== undefined;
		}
	}
}
</script>