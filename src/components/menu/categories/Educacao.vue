<template>
    <div>
        <h1>Educacao</h1>
        <div v-if="show">
            <div v-for="product in products" :key="product.id">
                <img :src="require('@/assets/images/educacao/' + product.image)" alt="product.name">
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
            </div>
        </div>
        <div v-else>
            <h1>There are no products in this category</h1>
        </div>
        
    </div>
</template>



<script>
export default {
    data() {
        return {
            show: false,
            products: [],
        }
    },

    created() {
        this.getProductsOfThisCategory();
        this.show = true;
    },

    mounted() {

    },

    methods: {
        // NOTE - it could be that the attribute "category" in any product is a number and not a string
        // since that in the DB it shows a number in that attribute (strangely enough)
        getProductsOfThisCategory() {
            let products = this.$store.dispatch('products/getProducts');
            for (let i = 0; i < products.length; i++) {
                if (products[i].category == this.category) {
                    this.products.push(products[i]);
                }
            }
        },

    }
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
</style>