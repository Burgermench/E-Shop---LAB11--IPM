<template>
    <div style="text-align: left;">
        <div v-for="order in orders" :key="order.id">
                <p> Data do pedido: {{ order.created_at }}</p>
                <p> Estado: {{ stateOf(order.status_id) }}</p>
                <p> Total: {{ totalPrice(order.total) }}</p>
            <hr>
        </div>
    </div>
</template>



<script>
export default {
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
        stateOf(num) {
            if(num == 1) {
                return "Pendente"
            } else if(num == 2) {
                return "Em preparação"
            } else if(num == 3) {
                return "Em transporte"
            } else if(num == 4) {
                return "Entregue"
            } else if(num == 5) {
                return "Cancelado"
            }
        },

        totalPrice(num) {
            return num/100 + "€"
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