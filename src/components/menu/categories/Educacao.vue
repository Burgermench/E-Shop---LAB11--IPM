<template>
    <div id="content_wrapper">
        <h1> {{category}} </h1>
        <div v-for="product in products" :key="product.id">
            <div class="product_click_to_add_to_basket" @click="addToBasket(product)">
                <img class="product_image" :src="require('@/assets/images/products/' + /* transform category to all lower case */ category.toLowerCase() + '/' + product.image)" alt="product image">
                <h3>{{ product.name }}</h3>
                <p>Preço: {{ parseFloat(product.price) / 100 }}€</p>
                <div v-if="product.visible == '0'">
                    <p>Produto indisponível, tente mais tarde</p>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            category: 'Educacao',
            products: [
                // {...},...
                // {
                // "cat_id":"SUSHI",
                // "id":"1",
                // "name":"Salmon Roll",
                // "description":"Simply delicious!",
                // "price":"18",
                // "image":"04.jpg",
                // "visible": "1",
                // },
                // {...},...
            ],
        }
    },

    created() {
        this.getProductsOfThisCategory();
    },

    mounted() {

    },

    methods: {
        getProductsOfThisCategory() {
            this.products = this.$store.state.products.products.filter(product => product.cat_id == "Educacao");
        },
        addToBasket(product) {
            if (product.visible == '1') {
                this.$store.commit('basket/incrementProduct', product.id);
            }
        },
    },

    computed: {
    
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

.product_image {
    width: auto;
    max-width: 100vw;
    height: auto;
    max-height: 300px;
}

// items must be alligned to the left
#content_wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: transparent;
    h1 {
        font-size: 2em;
        margin: 0;
        padding: 0;
    }
}
.product_click_to_add_to_basket {
    display: inline-block;
    width: 300px;
    height: auto;
    margin: 10px;
    margin-top: 1px;
    margin-bottom: 1px;
    border: none;
    border-radius: 10px;
    padding: 10px;
    padding-bottom: 1px;
    padding-top: 1px;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(0.8);
    &:hover {
        transform: scale(1.0);
    }
    &:active {
        transform: scale(0.9);
    }
}
</style>