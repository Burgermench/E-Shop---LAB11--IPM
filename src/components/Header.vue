<template>
    <div id="content-wrapper">

        <div id="r1">
            <div id="message_top">
                Não temos atendimento ao balcão. Faça a sua encomenda online | Entregas grátis a partir de 20€ | 

                <button id="contacts_btn" v-if="showContacts == false" @click="showContacts = true"> Contactos </button>
                <button id="contacts_btn" v-if="showContacts == true" @click="showContacts = false"> Contactos </button>

                <div id="contacts_menu" v-if="showContacts == true" @close="showContacts = false">
                    <div @close="showContacts = false">
                        <div id="contacts_dropdown">
                            <p>Telefone: +351 123456789</p>
                            <p>Email: ipm@ualg.pt</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

        <div id="r2">
            <div id="logo">
                <img id="custom_logo" alt="logo">
            </div>

            <div id="search">
                <input id="search_input" type="text" placeholder="Pesquisar">
                <button id="search_btn"> <img id="search_img" alt="search"> </button>
            </div>

            <div id="cart">
                <img id="cart_img" alt="cart">
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: "Header",

    data() {
        return {
            showContacts: false,
        }
    },

    created() {
        window.addEventListener('resize', this.handleResize);
    },

    mounted() {
        this.resize();
        document.getElementById('bckg_img').src = require('@/assets/images/background_white_pattern_triangles.png');
        document.getElementById('custom_logo').src = require('@/assets/images/custom_logo.png');
        document.getElementById('search_img').src = require('@/assets/images/search_spyglass.png');
        document.getElementById('cart_img').src = require('@/assets/images/cart.png');
    },

    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },

    methods: {	
        resize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },

        handleResize() {
            this.resize();
        },
    },

    computed: {
        
    },
}
</script>  






<style lang="scss" scoped>
// DEBUG
$debug: true;

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

#content-wrapper {
    position: relative;
    width: 100%;
    @include font();
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 30px 140px 100px;
    grid-template-areas: "r1" "r2" "r3";
    color: white;
}

#r1 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "message_top";
}

#message_top {
    grid-area: message_top;
    background-color: #c02000;
    padding-top: 3px;
    padding-left: 15px;
    text-align: left;
    font-size: 11px;
    font-weight: bold;
}

@mixin contacts_btn() {
    position: relative;
    border: none;
    background-color: transparent;
    font-weight: bold;
    text-shadow: 1px 1px 1px #000000;
}

#contacts_btn {
    @include contacts_btn();

    &:hover {
        cursor: pointer;
    }
    
    &:active {
        font-size: 11px;
        color: grey;
    }
    
    &:focus {
        outline: none;
    }
}

#contacts_menu {
    position: absolute;
    width: 200px;
    height: 40px;
    background-color: #c02000;
    z-index: 4;
    margin-left: 520px;
    text-shadow: 1px 1px 1px #000000;
}

#contacts_dropdown {
    padding-top: 5px;
    line-height: 0.3;
}

#r2 {
    grid-area: r2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "logo search cart";
}

#logo {
    grid-area: logo;
    padding-top: 10px;
    padding-left: 5px;
}

#search {
    grid-area: search;
    display: grid;
    height: 17%;
    grid-template-columns: 300px 35px;
    grid-template-rows: 1fr;
    grid-template-areas: "search_input search_btn";
    text-align: right;
    margin-top: 40px;
    margin-left: 20px;
}

#search_input {
    grid-area: search_input;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-left: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #c02000;
}

#search_btn {
    grid-area: search_btn;
    position: relative;
    right: 0;
    z-index: 1;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

#cart {
    grid-area: cart;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "cart_img cart_text";
    padding-right: 15px;
    text-align: right;
}

</style>