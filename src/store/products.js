import { request } from '@/plugins/http';

export default {
	namespaced: true,
	state: {
		products: null
	},
	getters: {
		all: state => state.products,
		item: state => id => state.products.find(pr => pr.id === id)
		/* item(state){
			return function(id){
				return state.products.find(pr => pr.id === id);
			};
		} */
	},
	mutations: {
		setProducts(state, products){
			state.products = products;
		}
	},
	actions: {
		async load(store){
			let products = await request('products/all.php');
			store.commit('setProducts', products);
		}
	}
}