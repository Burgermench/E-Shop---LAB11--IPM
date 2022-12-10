<template>
    <div id="content-wrapper">
        <div id="r1">
            <div id="message_top">
                Não temos atendimento ao balcão. Faça a sua encomenda online | Entregas grátis a partir de 20€ | 

                <button id="contacts_btn" @click="showModal = true"> Contactos </button>

                <div v-if="showModal == true" @close="showModal = false">
                    <div @close="showModal = false">
                        <h3 slot="header">Contactos</h3>
                        <div slot="body">
                            <p>Telefone: 123456789</p>
                            <p>Email: ipm@ualg.pt</p>
                        </div>
                    </div>
                    <button @click="showModal = false">Close</button>
                </div> 
            </div>
        </div>
        <div id="r1c1">

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            showModal: false,
        }
    },

    methods: {	

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
    height: 75px;
    @include font();
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 25px 40px 20px;
    grid-template-areas: "r1" "r2" "r3";
}

#r1 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 25px;
    background-color: #ff0000;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "message_top";
}

#message_top {
    grid-area: message_top;
    position: absolute;
    top: 0;
    width: 100%;
    height: 25px;
    border: 1px dashed rgb(161, 70, 70);
    background-color: #ff0000;
    padding-left: 15px;
    text-align: left;
    font-size: 12px;
    font-weight: bold;
    color: #000;
}

@mixin contacts_btn() {
    position: relative;
    border: none;
    background-color: transparent;
    font-weight: bold;
}

#contacts_btn {
    @include contacts_btn();

    &:hover {
        cursor: pointer;
        font-size: 10px;
    }

    &:active {
        font-size: 12px;
    }

    &:focus {
        outline: none;
        background-color: rgb(190, 0, 0); 
    }
}

#r2 {
    grid-area: r2;
    position: relative;
    width: 100%;
    height: 40px;
    
}


</style>