<template>
	<div>
		<h1 class="text-white">Cart</h1>
		<hr>
		<table class="table table-bordered table-hover text-white">
			<thead>
				<tr>
					<th>Title</th>
					<th>Price</th>
					<th>Cnt</th>
					<th>Total</th>
					<th>Actions</th>
				</tr>
			</thead>	
			<tbody>
				<tr v-for="pr in productsDetailed" :key="pr.id">
					<td>{{ pr.title }}</td>
					<td>{{ pr.price }}</td>
					<td>{{ pr.cnt }}</td>
					<td>{{ pr.price * pr.cnt }}</td>
					<td>
						<button class="btn btn-secondary me-1">-1</button>
						<button class="btn bg-info me-1">+1</button>
						<button class="btn btn-danger">X</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters('cart', ['productsDetailed'])
	}
}
</script>