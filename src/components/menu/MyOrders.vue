<!--

  const orders = {
  namespaced: true,
  state: {
    orders: 
    [
    //{
    //"id":"11",
    //"customer_id":"20",
    //"created_at":"2021-12-03 18:20:31",
    //"status_id":"1",
    //"total":"190",
    //"order_items":[{"product_id":"2","name":"Salmon Roll","price":"18","quantity":"4"},{"product_id":"3","quantity":"3"},{"product_id":"4","quantity":"2"}]
    //}
    ]
  },
  getters: {
    getOrders (state) {
      return state.orders
    },   
  }, 
  mutations: {
    addOrders(state, orders){
        state.orders = orders
    },
    addOrder(state, order){
      state.orders = [...state.orders, order]
  },

	},
  actions: {
    async getMyOrdersFromDB({commit, rootGetters}) {
			try {
				const response = await fetch(`http://daw.deei.fct.ualg.pt/~a61149/LAB11/api/orders.php?session_id=${rootGetters['user/getUser'].session_id}`)
				const data = await response.json()
        commit('addOrders', data)
			} 
			catch (error) {
        console.log('error: ', error)
			}
		},
    async addOrder({commit, rootGetters}, order) {
			try {
				const response = await fetch(`http://daw.deei.fct.ualg.pt/~a61149/LAB11/api/orders.php?session_id=${rootGetters['user/getUser'].session_id}`, {
					method: 'POST',
					body: JSON.stringify(order),
					headers: { 'Content-type': 'application/json; charset=UTF-8' },
				})
				const data = await response.json()
          console.log('received data:',data)
          commit('addOrder', data)
          return true
			} 
			catch (error) {
				console.error(error)
        return false
			}
		},
  },
  modules: {
  }
}
export default 
	orders

-->

<template>
    <div>
        <div v-for="order in orders" :key="order.id">
            <div v-for="item in order" :key="item.id">
                <img class="image_resize"
                    :src="require('@/assets/images/products/' + categoryOf(item) + '/' + imageOf(item))">
                <p> Nome {{ nameOf(item) }}</p>
                <p> Quantidade {{ quantity(item) }}</p>
                <p> Preco unitario {{ priceOf(item) }}</p>
                <p> Preco total {{ totalPriceOf(item) }}</p>
                <p> Estado {{ statusOf(item) }}</p>
                <p> data de emissao {{ dateOf(item) }}</p>

            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'MyOrders',

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

        categoryOf(item) {
            return this.categories.find(category => category.id == item.category_id).name.toLowerCase();
        },

        imageOf(item) {
            return this.products.find(product => product.id == item.product_id).image;
        },

        nameOf(item) {
            return this.products.find(product => product.id == item.product_id).name;
        },

        quantity(item) {
            return item.quantity;
        },

        priceOf(item) {
            return this.products.find(product => product.id == item.product_id).price;
        },

        totalPriceOf(item) {
            return this.products.find(product => product.id == item.product_id).price * item.quantity;
        },

        statusOf(item) {
            return this.orders.find(order => order.id == item.order_id).status_id;
        },

        dateOf(item) {
            return this.orders.find(order => order.id == item.order_id).created_at;
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