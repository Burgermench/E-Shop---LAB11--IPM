<!--
    <nav>
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
                <canvas id="custom_logo"></canvas>
            </div>
            
            <div id="search">
                <input id="search_input" type="text" placeholder="Pesquise por produtos, marcas ou caracteristicas">
                    <button id="search_btn"> <canvas id="search_img"></canvas> </button>
                </div>
                
                <div id="cart">
                    <canvas id="cart_img"></canvas>
                </div>
            </div>
            
        </nav>
    -->
<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
        <!-- insert image here -->
        
        <div class="container-fluid">
            <div id="logo">
                <canvas id="custom_logo"></canvas>
            </div>
            
            <a class="navbar-brand" href="#">
                Navbar
            </a>

            <button class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" 
                id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" 
                            href="#" 
                            id="navbarDropdown" 
                            role="button" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false">
                            Dropdown
                        </a>

                        <ul class="dropdown-menu" 
                            aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item" href="#">Action</a>
                            </li>
                            
                            <li>
                                <a class="dropdown-item" href="#">Another action</a>
                            </li>
                            
                            <li>
                                <hr class="dropdown-divider">
                            </li>

                            <li>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>

                <form class="d-flex">
                    <input class="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search">
                    
                    <button class="btn btn-outline-success" 
                        type="submit">
                        Pesquise por produtos, marcas ou características</button>
                </form>
            </div>
        </div>
    </nav>

</template>

<script>
export default {
    name: "Header",

    data() {
        return {
            cart_count: 0,
            window: {
                width: 500,
                height: 500,
            },
            showContacts: false,
        }
    },

    created() {
        window.addEventListener('resizeWindow', this.handleResizeWindow);
    },
    
    mounted() {
        this.resizeWindow();
        let customLogoParentWidth = document.getElementById("logo").offsetWidth*0.90;
        let customLogoParentHeight = document.getElementById("logo").offsetHeight*0.65;
        this.getImageResized("custom_logo", customLogoParentWidth, customLogoParentHeight, require("@/assets/images/custom_logo.png"));
        let searchImgParentWidth = document.getElementById("search_btn").offsetWidth*0.35;
        let searchImgParentHeight = document.getElementById("search_btn").offsetHeight*0.5;
        this.getImageResized("search_img", searchImgParentWidth, searchImgParentHeight, require("@/assets/images/search_spyglass.png"));
        //let cartImgParentWidth = document.getElementById("cart").offsetWidth;
        let cartImgParentHeight = document.getElementById("cart").offsetHeight*0.4;
        this.getImageResized("cart_img", undefined, cartImgParentHeight, require("@/assets/images/cart.jpeg"));
    },

    destroyed() {
        window.removeEventListener('resizeWindow', this.handleResizeWindow);
    },

    methods: {
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

</style>


<!-- 
    <style lang="scss" scoped>
    
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

/* ROW 1 */

#r1 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "message_top";
}

/* MESSAGE TOP */

#message_top {
    grid-area: message_top;
    font-size: 11px;
    text-align: left;
    font-weight: bold;
    background-color: #c02000;
    padding-top: 5px;
    padding-left: 15px;
}

/* CONTACTS */

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

/* ROW2 */

#r2 {
    grid-area: r2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "logo search cart";
    position: relative;
}

/* LOGO */

#logo {
    grid-area: logo;
    padding-top: 10px;
}

/* SEARCH BAR */

#search {
    grid-area: search;
    display: grid;
    grid-template-rows: 38px;
    grid-template-columns: 160% 15%;
    grid-template-areas: "search_input search_btn";
    z-index: 2;
    position: absolute;
    bottom: 10%;
    left: 15%;  
}

#search_input {
    grid-area: search_input;
    text-align: left;
    font-size: 16px;
    height: 100%;
    width: 100%;
    color: #ffffff;
    border: none;
    padding-left: 10px;
    &:focus {
        outline: none;
    }
}

#search_btn {
    grid-area: search_btn;
    &:hover {
        cursor: pointer;
        background-color: #c02000;
    }
    &:active {
        background-color: #c02000;
        color: white;
    }
    &:focus {
        outline: none;
    }
}

/* CART */

#cart {
    grid-area: cart;
    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-rows: 1fr;
    grid-template-areas: "cart_img cart_count";
    z-index: 1;
}

#cart_img {
    grid-area: cart_img;
    position: relative;
    top: 20%;
    left: 60%;
    z-index: 1;
    border-radius: 100%;
    border: 4px solid #c02000;
}

</style>
-->
