<template>
	<div>
		<div v-for= "item in basket" :key="item.id">
			<img class="image_resize" :src="require('@/assets/images/products/' + associatedProduct(item.id).cat_id.toLowerCase() + '/' + associatedProduct(item.id).image)"/>
			<p>{{ associatedProduct(item.id).name }}</p>
			<p>Preco unidade: {{ priceOf(associatedProduct(item.id), 1) }} €</p>
			<p>Quantidade: {{ item.quantity }}</p>
			<p>Total: {{ priceOf(associatedProduct(item.id), item.quantity) }} €</p>
			<button @click="incrementProduct(item.id)">+</button>
			<button @click="decrementProduct(item.id)">-</button>
		</div>
		<div>
			<p>Total: {{ decimalOf(totalPrice()) }} €</p>
		</div>
		<button @click="clearBasket()">Clear Basket</button>
		<button @click="checkout()">Checkout</button>
	</div>
</template>



<script>
export default {
	name: 'Basket',

    components: {

	},

	data() {
		return {
			categories: [],
			products: [],
			basket: [],
			orders: [],
		}
	},

	created() {
		this.categories = this.$store.getters['categories/getCategories'];
		this.products = this.$store.getters['products/getProducts'];
		this.basket = this.$store.getters['basket/getProducts'];
		this.orders = this.$store.getters['orders/getOrders'];
	},

	mounted() {

	},

	destroyed() {

	},

	methods: {
		associatedProduct(id) {
			let product = this.products.find(product => product.id == id);
			return product;
		},

		priceOf(product, quantity) {
			return (product.price / 100 * quantity).toFixed(2);
		},

		incrementProduct(id) {
			this.$store.commit('basket/incrementProduct', id);
		},

		decrementProduct(id) {
			this.$store.commit('basket/decrementProduct', id);
		},

		checkout() {
			if (!this.userIsLogged) {
				// back to the menu with you
				this.$router.push('/menu');
			}
			this.createOrder()
		},

		createOrder() {
			let price = this.totalPrice();
			let order = {
				customer_id: this.$store.getters['user/getUser'].id,
				status_id: '1',
				totalAmount: price,
				items: this.basket
			};
			console.log("order: ", order)
			this.$store.dispatch('orders/addOrder', order).then((success) => {
				if (success) {
					this.$store.commit('basket/clearBasket');
					this.$router.push('/menu');
				}
			});
		},

		totalPrice() {
			let total = 0;
			this.basket.forEach(item => {
				let product = this.associatedProduct1(item.id);
				total += product.price * item.quantity;
				total = parseInt(total);
			});
			return total;
		},
		
		decimalOf() {
			return (this.totalPrice() / 100).toFixed(2);
		},

		associatedProduct1(id) {
			return this.$store.getters['products/getProducts'].find(product => product.id == id);
		},

		userIsLogged: function() {
			return this.$store.getters['user/getUser'].id !== undefined;
		},

		clearBasket() {
			this.$store.commit('basket/clearBasket');
			this.basket = this.$store.getters['basket/getProducts'];
		},
	},
}
</script>

<style lang="scss" scoped>
/* DEBUG */
$debug: false;

@mixin debug() {
	border-style: dashed;
	border-color: red;
	border-width: 1px;
}

div {
	@if $debug {
		@include debug();
	}
}

@mixin font() {
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	font-style: normal;
}

.image_resize {
	width: 300px;
	height: auto;
	object-fit: cover;
}

</style>