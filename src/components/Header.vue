<template>
    <nav id="content-wrapper">
        <!-- ROW 1 -->
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
    
        <!-- ROW 2 -->
        <div id="r2">
            <!-- logo -->
            <div id="r2c1">
                <div id="logo">
                    <canvas id="custom_logo"
                        type="button"
                        @click = "$router.push('/')">>
                    </canvas>
                </div>
            </div>

            <!-- menus and search bar-->
            <div id="r2c2">
                <!-- row1 -->
                <div id="r2c2r1">
                    <!-- menu -->
                    <div id="r2c2r1c1">
                        <div id="menu">
                            <button id="menu_btn"
                                @click = "$router.push('/menu')">
                                Início
                            </button>
                        </div>
                    </div>

                    <!-- categories -->
                    <div id="r2c2r1c2">
                        <div id="categories">
                            <button id="categories_btn"
                                @click = "displayCaregories = !displayCaregories"
                                >
                                Categorias
                            </button>
                        </div>
                        <div id="categories_dropdown">
                            <div v-if="displayCaregories === true">
                                <div v-for="category in categories" :key="category.id">
                                    <button class="categories_dropdown_item"
                                        @click = "$router.push('/menu/:' + category.name)">
                                        {{ category.name }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- account -->
                    <div id="r2c2r1c3">
                        <div id="user">
                            <button id="user_btn"
                                @click = "showAccountDropDown = !showAccountDropDown"
                                >
                                Conta
                            </button>
                        </div>
                        <div v-if="showAccountDropDown === true" id="account_dropdown">
                            <!-- login -->
                            <div v-if="userLoggedIn === false">
                                <router-link to="/login"><button class="account_dropdown_item">Entrar</button></router-link>
                            </div>
                            <!-- register -->
                            <div v-if="userLoggedIn === false">
                                <router-link to="/register"><button class="account_dropdown_item">Registar</button></router-link>
                            </div>
                            <!-- log out -->
                            <div v-if="userLoggedIn === true">
                                <router-link to="/logout"><button class="account_dropdown_item">Logout</button></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- row2 -->
                <div id="r2c2r2">
                    <div id="search_bar">
                        <input id="search_input" type="text" placeholder="Pesquise por produtos, marcas ou caracteristicas">
                        <button id="search_btn"> <canvas id="search_img"></canvas> </button>
                    </div>
                </div>
            </div>  

            <!-- cart -->
            <div id="r2c3">
                <div id="cart">
                    <canvas id="cart_img" 
                        type="button"
                        @mouseover = "displayCart = true"
                        @mouseleave = "displayCart = false"
                        @click = "$router.push('/basket')">
                    </canvas>

                    <div id="cart_count" 
                        v-if="cartCount > 0"
                        >
                        <p> {{ cartCount }} </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>


<script>
export default {
    name: "Header",

    data() {
        return {
            userLoggedIn: false,
            showAccountDropDown: false,
            displayCart: false,
            displayCaregories: false,
            categories: [
                        // {
                        //"id":"1",
                        //"name":"Pizza",
                        //"description":"NULL",
                        //"image":"NULL",
                        //}
                        ],
            cartCount: 0,
            window: {
                width: 0,
                height: 0,
            },
            showContacts: false,
        }
    },

    created() {
        console.log("Header created");
        window.addEventListener('resizeWindow', this.handleResizeWindow);
        this.fetchCategories();
    },
    
    mounted() {
        this.resizeWindow();
        let customLogoParentWidth = document.getElementById("logo").offsetWidth;
        //let customLogoParentHeight = document.getElementById("logo").offsetHeight;
        this.getImageResized("custom_logo", customLogoParentWidth, undefined, require("@/assets/images/custom_logo.png"));
        //let searchImgParentWidth = document.getElementById("search_btn").offsetWidth*0.35;
        //let searchImgParentHeight = document.getElementById("search_btn").offsetHeight*0.5;
        this.getImageResized("search_img", undefined, undefined, require("@/assets/images/search.svg"));
        //let cartImgParentWidth = document.getElementById("cart").offsetWidth;
        let cartImgParentHeight = document.getElementById("cart").offsetHeight*0.40;
        this.getImageResized("cart_img", undefined, cartImgParentHeight, require("@/assets/images/cart.jpeg"));
    },

    destroyed() {
        window.removeEventListener('resizeWindow', this.handleResizeWindow);
    },

    methods: {
        async fetchCategories() {
            if (await this.$store.dispatch('categories/getCategoriesFromDB')) {
                this.categories = this.$store.getters['categories/getCategories'];
            }
        },
        getCategories() {
            this.categories = this.$store.getters.getCategories;
            console.log("we get the following categories: " + this.categories);
        },
        getImageResized(elementId, w, h, source) {
            var img = new Image(),
                canvas = document.getElementById(elementId),
                ctx = canvas.getContext("2d");
            img.onload = () => {
                if(w == undefined) {
                    canvas.width = (img.naturalWidth * h) / img.naturalHeight;
                } else {
                    canvas.width = w;
                }
                if(h == undefined) {
                    canvas.height = (img.naturalHeight * w) / img.naturalWidth;
                } else {
                    canvas.height = h;
                }
                if(h == undefined && w == undefined) {
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                }
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                
            };
            img.src = source;
            return img;
        },

        resizeWindow() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },

        handleResizeWindow() {
            this.resizeWindow();
        },
    },

    computed: {
        
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

/* "NAVBAR" ...lol */
#content-wrapper {
    @include font();
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    grid-template-areas: "r1" "r2" "r3";
    position: relative;
}

/* ROW 1 */
#r1 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "message_top";
    position: relative;
}
#message_top {
    grid-area: message_top;
    font-size: 11px;
    text-align: left;
    font-weight: bold;
    background-color: #c02000;
    padding-top: 3px;
    padding-left: 15px;
    padding-bottom: 3px;
}
#contacts_btn {
    position: relative;
    border: none;
    background-color: transparent;
    font-weight: bold;
    text-shadow: 1px 1px 1px #000000;
    color: white;
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
    height: 50px;
    background-color: #c02000;
    z-index: 4;
    margin-left: 520px;
    text-shadow: 1px 1px 1px #000000;
    color: white;
    padding-top: 5px;
}
#contacts_dropdown {
    padding-top: 5px;
    line-height: 0.3;
}

/* ROW2 */
#r2 {
    grid-area: r2;
    width: 100%;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: auto auto auto;
    grid-template-areas: "r2c1 r2c2 r2c3";
    //gradient grey half transparent to bottom dark grey color
    background-image: linear-gradient(rgba(100, 100, 100, 0.5), rgb(50, 50, 50));
}

/* ROW 2 COLUMN 1 */
#r2c1 {
    grid-area: r2c1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "logo";
}
#logo {
    grid-area: logo;
}

/* ROW 2 COLUMN 2 */
#r2c2 {
    grid-area: r2c2;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 100%;

    grid-template-areas: "r2c2r1" "r2c2r2";
    position: relative;
}

/* ROW 2 COLUMN 2 ROW 1 */
#r2c2r1 {
    grid-area: r2c2r1;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: auto auto auto;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-template-areas: "r2c2r1c1 r2c2r1c2 r2c2r1c3";
    position: relative;
}

/* ROW 2 COLUMN 2 ROW 1 COLUMN 1 */
#r2c2r1c1 {
    grid-area: r2c2r1c1;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "menu_btn";
    position: relative;
}
#menu_btn {
    grid-area: menu_btn;
    border: none;
    width: 100%;
    height: 100%;
    background-color: darkgrey;
    font-weight: bold;
    text-shadow: 1px 1px 1px #000000;
    color: white;
    position: relative;
    &:hover {
        cursor: pointer;
        background-color: grey;
    }
    &:active {
        font-size: 11px;
    }
    &:focus {
        outline: none;
    }
}

/* ROW 2 COLUMN 2 ROW 1 COLUMN 2 */
#r2c2r1c2 {
    grid-area: r2c2r1c2;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "categories_btn";
    position: relative;
}
#categories_btn {
    grid-area: categories_btn;
    border: none;
    background-color: darkgrey;
    font-weight: bold;
    text-shadow: 1px 1px 1px #000000;
    position: relative;
    color: white;
    width: 100%;
    height: 100%;
    &:hover {
        cursor: pointer;
        background-color: grey;
    }
    &:active {
        font-size: 11px;
    }
    &:focus {
        outline: none;
    }
}
#categories_dropdown{
    position: absolute;
    width: auto;
    height: auto;
    background-color: darkgrey;
    z-index: 4;
    margin-top: 45px;
    text-shadow: 1px 1px 1px #000000;
}
.categories_dropdown_item {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "account_dropdown_item";
    background-color: darkgrey;
    width: 100%;
    height: 100%;
    &:hover {
        cursor: pointer;
        background-color: grey;
    }
    &:active {
        font-size: 14px;
    }
    &:focus {
        outline: none;
    }
}

/* ROW 2 COLUMN 2 ROW 1 COLUMN 3 */
#r2c2r1c3 {
    grid-area: r2c2r1c3;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "user";
    position: relative;
}
#user {
    grid-area: user;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "user_btn";
    z-index: 2;
}
#user_btn {
    grid-area: user_btn;
    border: none;
    background-color: darkgrey;
    font-weight: bold;
    text-shadow: 1px 1px 1px #000000;
    position: relative;
    color: white;
    width: 100%;
    height: 100%;
    &:hover {
        cursor: pointer;
        background-color: grey;
    }
    &:active {
        font-size: 11px;
    }
    &:focus {
        outline: none;
    }
}
#account_dropdown {
    position: absolute;
    width: auto;
    height: auto;
    background-color: transparent;
    z-index: 4;
    margin-top: 45px;
    text-shadow: 1px 1px 1px #000000;
    color: white;
}
.account_dropdown_item {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "account_dropdown_item";
    background-color: darkgrey;
    width: 100%;
    height: 100%;
    &:hover {
        cursor: pointer;
        background-color: grey;
    }
    &:active {
        font-size: 11px;
    }
    &:focus {
        outline: none;
    }
}


/* ROW 2 COLUMN 2 ROW 2 */
#r2c2r2 {
    grid-area: r2c2r2;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 100%;
    grid-template-areas: "search_bar";
}
#search_bar {
    grid-area: search_bar;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 80% 20%;
    grid-template-areas: "search_input search_btn";
    z-index: 2;
}
#search_input {
    grid-area: search_input;
    text-align: left;
    font-size: 14px;
    color: #000000;
    border: solid black 2px;
    border-right: none;
    padding-left: 7px;
    &:focus {
        outline: none;
        font-size: 15px;
    }
}
#search_btn {
    grid-area: search_btn;
    border-left: none;
    &:hover {
        cursor: pointer;
        background-color: #c02000;
    }
    &:active {
        background-color: #741300;
    }
    &:focus {
        outline: none;
    }
}

/* ROW 2 COLUMN 3 */
#r2c3 {
    grid-area: r2c3;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "cart";
    position: relative;
}
#cart {
    grid-area: cart;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 5% auto;
    grid-template-areas: "cart_count cart_img";
    z-index: 1;
}
#cart_img {
    grid-area: cart_img;
    z-index: 1;
    border-radius: 100%;
    box-shadow: #000000 1px 1px 1px;
    margin-top: 5;
    margin-left: 0;
    &:hover {
        cursor: pointer;
    }
    &:active {
        background-color: #c02000;
    }
    &:focus {
        background-color: #691200;
        outline: none;
    }
}
#cart_count {
    grid-area: cart_count;
    z-index: 2;
    height: 30px;
    width: 30px;
    background-color: #c02000;
    border: 4px solid #c02000;
    border-radius: 100%;
    color: white;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    padding-top: 2px;
    box-shadow: #000000 1px 1px 1px;
}
</style>
