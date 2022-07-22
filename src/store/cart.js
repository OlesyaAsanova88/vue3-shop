import { request } from '@/plugins/http';

export default {
	namespaced: true,
	state: {
		products: [],
		token: null
	},
	getters: {
		products: state => state.products,
		inCart: state => id => state.products.some(pr => pr.id === id),
		productsDetailed(state, getters, rootState, rootGetters){
			return state.products.map(pr => {
				let info = rootGetters['products/item'](pr.id);
				return { ...info, ...pr };
			});
		},
		count: state => state.products.length,
		total: (state, getters) => getters.productsDetailed.reduce(
			(total, pr) => total + pr.price * pr.cnt,
			0
		)
	},
	mutations: {
		set(state, { cart, token }){
			state.products = cart;
			state.token = token;
		},
		add(state, id){
			state.products.push({ id, cnt: 1 });
		},
		remove(state, id){
			state.products = state.products.filter(pr => pr.id !== id);
		}
	},
	actions: {
		async load({ commit }){
			let currentToken = localStorage.getItem('CART_TOKEN');
			let { cart, needUpdate, token } = await request(`cart/load.php?token=${currentToken}`);

			if(needUpdate){
				localStorage.setItem('CART_TOKEN', token);
			}
			
			commit('set', { cart, token });
		},
		async add({ commit, state, getters }, id){
			if(!getters.inCart(id)){
				let res = await request(`cart/add.php?token=${state.token}&id=${id}`);

				if(res){
					commit('add', id);
				}
			}
		},
		async remove({ commit, state, getters }, id){
			if(getters.inCart(id)){
				let res = await request(`cart/remove.php?token=${state.token}&id=${id}`);

				if(res){
					commit('remove', id);
				}
			}
		}
	}
}