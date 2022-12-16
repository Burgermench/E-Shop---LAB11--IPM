<template>
    <div id="content-wrapper">
        <div id="r1">
            <img id="faixaNatalicia">
        </div>

        <div id="r2">
            <div id="r2c1">
                <img id="kit1" @click="$router.push('/menu/:Educacao')">
            </div>
        
            <div id="r2c2">
                <img id="kit2">
            </div>
        </div>

        <div id="r3">
            <div id="r3c1">
                <img id="raspberry" @click="$router.push('/menu/:Educacao')">
            </div>
            <div id="r3c2">
                <img id="certificado">
            </div>
            <div id="r3c3">
                <img id="arduino" @click="$router.push('/menu/:Educacao')">
            </div>
        </div>

        <div id="r4">
            <div id="r4c1">
                <p class="msg_title">
                    A PTcomponents não dispõe de serviço de balcão.
                </p>
                <p class="msg">
                    A recolha de encomendas pode ser feita das 10:00H às 13:00H e das 14:00H às 18:00H e terão de ser colocadas através da
                    loja online até às 9H. Estamos abertos de 2ºF a 6ªF e encerramos ao fim-de-semana.
                </p>
            </div>
            <div id="r4c2">
                <p class="msg_title">
                    Apoio Técnico Especializado
                </p>
                <p class="msg">
                    Estamos à sua disposição para questões ou duvidas técnicas, mas dentro do nosso espectro de conhecimento,
                    disponibilidade e dentro dos materiais que comercializamos.
                </p>
            </div>
            <div id="r4c3">
                <p class="msg_title">
                    Entregas Grátis
                </p>
                <p class="msg">
                    Em encomendas iguais ou superiores a 50€ a PTcomponents oferece os portes de Envio para Portugal Continental. Oferta
                    exclusiva para encomendas registadas online.
                </p>
            </div>
            <div id="r4c4">
                <p class="msg_title">
                    Pagamentos Seguros
                </p>
                <p class="msg">
                    Dispomos de vários métodos de pagamento seguros para tornar confiável o comercio electrónico: MBWay, Paypal, Referência
                    Multibanco, Transferência Bancária, Pagamento na loja ou Envios à Cobrança.
                </p>
            </div>
        </div>

        <div id="r5"><!-- caroussel of all the items, rolling 5 items at a time until the end then repeat  -->
            <div id="d3caroussel">
                <div id="d3carouselContainer">
                    <div class="carousel">
                        <div class="carousel__face" type="button" @click="$router.push('/menu/:Educacao')"><img id="caroussel_arduino"></div>
                        <div class="carousel__face" type="button" @click="$router.push('/')"><img id="caroussel_logo"></div>
                        <div class="carousel__face"><img id="caroussel_media"></div>
                        <div class="carousel__face" type="button" @click="$router.push('/menu/:Motherboards')"><img id="caroussel_motherboard"></div>
                        <div class="carousel__face" type="button" @click="$router.push('/menu/:Graficas')"><img id="caroussel_graphicsCard"></div>
                        <div class="carousel__face" type="button" @click="$router.push('/menu/:Processadores')"><img id="caroussel_processor"></div>
                        <div class="carousel__face" type="button" @click="$router.push('/menu/:Alimentacoes')"><img id="caroussel_supply"></div>
                        <div class="carousel__face" type="button" @click="$router.push('/menu/:Rams')"><img id="caroussel_ram"></div>
                        <div class="carousel__face" type="button" @click="$router.push('/menu/:Armazenamento')"><img id="caroussel_storage"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                        // {
                        //"id":"1",
                        //"name":"Motherboards",
                        //"description":"NULL",
                        //"image":"generic_motherboard.jpg",
                        //}
                        ],
            products: [
                      // {
                      //"cat_id":"SUSHI",
                      //"id":"1",
                      //"name":"Salmon Roll",
                      //"description":"Simply delicious!",
                      //"price":"18",
                      //"image":"04.jpg",
                      //"visible": "1",
                      //}
                      ],
        }
    },

    created() {
        this.getCategories();
        this.getProducts();
    },

    mounted() {
        // IMAGES
        document.getElementById('faixaNatalicia').src = require('@/assets/images/landing_page/Faixa_Natalicia.jpg');
        document.getElementById('kit1').src = require('@/assets/images/landing_page/kit1.jpg');
        document.getElementById('kit2').src = require('@/assets/images/landing_page/kit2.jpg');
        document.getElementById('raspberry').src = require('@/assets/images/landing_page/raspberry.jpg');
        document.getElementById('certificado').src = require('@/assets/images/landing_page/certificado.jpg');
        document.getElementById('arduino').src = require('@/assets/images/landing_page/arduino.jpg');
        // caroussel
        document.getElementById('caroussel_logo').src = require('@/assets/images/custom_logo.png');
        document.getElementById('caroussel_media').src = require('@/assets/images/landing_page/social_media.png');
        document.getElementById('caroussel_motherboard').src = require('@/assets/images/landing_page/generic_motherboard.jpg');
        document.getElementById('caroussel_processor').src = require('@/assets/images/landing_page/generic_processor.jpg');
        document.getElementById('caroussel_graphicsCard').src = require('@/assets/images/landing_page/generic_graphicsCard.jpg');
        document.getElementById('caroussel_supply').src = require('@/assets/images/landing_page/generic_supply.jpg');
        document.getElementById('caroussel_arduino').src = require('@/assets/images/landing_page/kids_arduino.jpg');
        document.getElementById('caroussel_ram').src = require('@/assets/images/landing_page/generic_rams.jpg');
        document.getElementById('caroussel_storage').src = require('@/assets/images/landing_page/generic_storage.jpg');
    },

    methods: {
        getCategories() {
            this.categories = this.$store.getters['categories/getCategories'];
        },
        getProducts() {
            this.products = this.$store.getters['products/getProducts'];
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
#content-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    z-index: 1;
    position: relative;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto auto;
    grid-gap: 10px;
    grid-template-areas: 
        "r1"
        "r2"
        "r3"
        "r4"
        "r5";
}

/* ROW1 */

#r1 {
    grid-area: r1;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas: 
        "faixaNatalicia";
    position: relative;
}

#faixaNatalicia {
    grid-area: faixaNatalicia;
    width: 100%;
    height: auto;
    position: relative;
}

/* ROW2 */
#r2 {
    grid-area: r2;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 100%;
    grid-template-areas: 
        "r2c1 r2c2";
    position: relative;
}

#r2c1 {
    grid-area: r2c1;
    margin-left: 5%;
    width: 90%;
    height: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    grid-template-areas: 
        "kit1";
    position: relative;
}

#kit1 {
    grid-area: kit1;
    width: 100%;
    position: relative;
    &:hover {
        cursor: pointer;
    }
}

#r2c2 {
    grid-area: r2c2;
    margin-left: 5%;
    width: 90%;
    height: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    grid-template-areas: 
        "kit2";
    position: relative;
}

#kit2 {
    grid-area: kit2;
    width: 100%;
    position: relative;
    &:hover {
        cursor: pointer;
    }
}

/* ROW3 */
#r3 {
    grid-area: r3;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 100%;
    grid-template-areas: 
        "r3c1 r3c2 r3c3";
    position: relative;
}

#r3c1 {
    grid-area: r3c1;
    margin-left: 5%;
    width: 90%;
    height: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    grid-template-areas: 
        "raspberry";
    position: relative;
}

#raspberry {
    grid-area: raspberry;
    width: 100%;
    position: relative;
    &:hover {
        cursor: pointer;
    }
}

#r3c2 {
    grid-area: r3c2;
    margin-left: 5%;
    padding-top: 5%;
    width: 90%;
    height: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    grid-template-areas: 
        "certificado";
    position: relative;
}

#certificado {
    grid-area: certificado;
    width: 100%;
    position: relative;
}

#r3c3 {
    grid-area: r3c3;
    margin-left: 5%;
    width: 90%;
    height: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    grid-template-areas: 
        "arduino";
    position: relative;
}

#arduino {
    grid-area: arduino;
    width: 100%;
    position: relative;
    &:hover {
        cursor: pointer;
    }
}

/* ROW4 */
#r4 {
    padding-left: 5px;
    padding-right: 5px;
    grid-area: r4;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 100%;
    grid-gap: 5px;
    grid-template-areas: 
        "r4c1 r4c2 r4c3 r4c4";
    position: relative;
}

#r4c1 {
    grid-area: r4c1;
    height: fit-content;
    background-color: #ff000067;
}

#r4c2 {
    grid-area: r4c2;
    height: fit-content;
    background-color: #ff000067;
}

#r4c3 {
    grid-area: r4c3;
    height: fit-content;
    background-color: #ff000067;
}

#r4c4 {
    grid-area: r4c4;
    height: fit-content;
    background-color: #ff000067;
}

.msg_title {
    margin-bottom: 0px;
    font-size: 0.7em;
    font-weight: bold;
    color: #000000;
    text-align: center;
}

.msg {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.6em;
    color: #000000;
    text-align: inherit;
    padding-left: 5px;
    padding-right: 5px;
    height: fit-content;
}

/* ROW 5 */
#r5 {
    padding-top: 10px;
    grid-area: r5;
    width: 100%;
    height: 250px;
    position: relative;
}

#d3caroussel {
    margin: 0;
    margin-top: -120px;
    background: transparent;
    height: auto;
    text-align: center;
    font-family: sans-serif;
    color: #fefefe;
}

#d3carouselContainer {
    position: relative;
    width: 220px;
    margin: 100px auto 0 auto;
    perspective: 100000px;
}

.carousel {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: rotate360 60s infinite forwards linear;
}

.carousel__face {
    position: absolute;
    width: 300px;
    height: auto;
    max-height: 180px;
    top: 20px;
    left: 10px;
    right: 10px;
    background-size: cover;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
    display: flex;
}

span {
    margin: auto;
    font-size: 2rem;
}

.carousel__face:nth-child(1) {
    transform: rotateY(0deg) translateZ(430px);
}

#caroussel_arduino {
    width: inherit;
    height: inherit;
}

.carousel__face:nth-child(2) {
    transform: rotateY(40deg) translateZ(430px);
}

#caroussel_motherboard {
    width: inherit;
    height: inherit;
}

.carousel__face:nth-child(3) {
    transform: rotateY(80deg) translateZ(430px);
}

#caroussel_graphicsCard {
    width: inherit;
    height: inherit;
}

.carousel__face:nth-child(4) {
    transform: rotateY(120deg) translateZ(430px);
}

#caroussel_processor {
    width: inherit;
    height: inherit;
}

.carousel__face:nth-child(5) {
    transform: rotateY(160deg) translateZ(430px);
}

#caroussel_supply {
    width: inherit;
    height: inherit;
}

.carousel__face:nth-child(6) {
    transform: rotateY(200deg) translateZ(430px);
}

#caroussel_ram {
    width: inherit;
    height: inherit;
}

.carousel__face:nth-child(7) {
    transform: rotateY(240deg) translateZ(430px);
}

#caroussel_storage {
    width: inherit;
    height: inherit;
}

.carousel__face:nth-child(8) {
    transform: rotateY(280deg) translateZ(430px);
}

#caroussel_logo {
    width: inherit;
    height: inherit;
}

.carousel__face:nth-child(9) {
    transform: rotateY(320deg) translateZ(430px);
}

#caroussel_media {
    width: inherit;
    height: inherit;
}

@keyframes rotate360 {
    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(-360deg);
    }
}
</style>