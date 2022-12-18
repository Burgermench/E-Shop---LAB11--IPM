<template>
	<div>
		<div id="content-wrapper">
			<Header/>
			<div id="r1">
				<div id="r1c1"></div>

				<!-- CONTENT START -->
				<div id="r1c2">
					<!-- MENU STRUCTURE -->
					<div v-if="Content === undefined">
						<Landing/>
					</div>
					<!-- CATEGORY STRUCTURE -->
					<div v-else-if="Content === ':Motherboards'">
						<Motherboards/>
					</div>
					<div v-else-if="Content === ':Processadores'">
						<Processors/>
					</div>
					<div v-else-if="Content === ':Graficas'">
						<Graphics/>
					</div>
					<div v-else-if="Content === ':Alimentacoes'">
						<PowerSupplies/>
					</div>
					<div v-else-if="Content === ':Educacao'">
						<Educacao/>
					</div>
					<div v-else-if="Content === ':Rams'">
						<Ram/>
					</div>
					<div v-else-if="Content === ':Armazenamento'">
						<Storage/>
					</div>
					<!-- USER STRUCTURE -->
					<div v-else-if="Content === ':Login'">
						<Login/>
					</div>
					<div v-else-if="Content === ':Register'">
						<Register/>
					</div>
					<div v-else-if="Content == ':Logout'">
						<Logout/>
					</div>
					<!-- ORDER STRUCTURE -->
					<div v-else-if="Content === ':MyOrders'">
						<MyOrders/>
					</div>
					<div v-else-if="Content === ':Basket'">
						<Basket/>
					</div>
					<div v-else-if="Content === ':Checkout'">
						<Checkout/>
					</div>
					<div v-else>
						<h1>Content not found</h1>
						<h1>Content: ({{Content}})</h1>
					</div>
				</div>
				<!-- CONTENT END -->

				<div id="r1c3"></div>
			</div>
		</div>
		<Footer/>
	</div>
</template>



<script>
//header and footer
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
//landing page
import Landing from '@/components/menu/Landing.vue'
//categories
import Motherboards  from '@/components/menu/categories/Motherboards.vue'
import Processors 	 from '@/components/menu/categories/Processors.vue'
import Graphics 	 from '@/components/menu/categories/Graphics.vue'
import PowerSupplies from '@/components/menu/categories/PowerSupplies.vue'
import Educacao 	 from '@/components/menu/categories/Educacao.vue'
import Ram 			 from '@/components/menu/categories/Ram.vue'
import Storage 		 from '@/components/menu/categories/Storage.vue'
//user stuff
import Login    from '@/components/menu/Login.vue'
import Register from '@/components/menu/Register.vue'
import Logout from '@/components/menu/Logout.vue'
//ordering stuff 
import Basket   from '@/components/menu/Basket.vue'
import MyOrders from '@/components/menu/MyOrders.vue'
import Checkout from '@/components/menu/Checkout.vue'

export default {
	name: 'Menu',

    components: {
		Footer,
		Landing,
		Motherboards,
		Processors,
		Graphics,
		PowerSupplies,
		Educacao,
		Ram,
		Storage,
		Header,
		Login,
		Register,
		Logout,
		Basket,
		MyOrders,
		Checkout,
	},
	
	data() {
		return {
			Content: undefined,
		}
	},

	created() {

	},

	mounted() {
		this.setContent();
	},

	watch: {
		'$route'(to, from) {
			if(to !== from)
				this.setContent();
		}
	},

	destroyed() {

	},

	methods: {
		setContent() {
			this.Content = this.$route.params.Content;
			console.log("Menu content: " + this.Content);
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
#content-wrapper {
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	color: #000;
	background-image: url('~@/assets/images/background_white_pattern_triangles.png');
}
#bckg_img {
	z-index: -1;
	position: absolute;
	top: 0;
	left: 0;
}

#r1 {
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: 5% auto 5%;
	grid-template-rows: auto;
	grid-template-areas: 'r1c1 r1c2 r1c3';
	background: repeating-linear-gradient(
		45deg,
		rgba(100, 100, 100, 0.2),
		rgba(100, 100, 100, 0.3) 10px,
		rgba(100, 100, 100, 0.1) 10px,
		rgba(100, 100, 100, 0.5) 20px
	);
}

/* RIGHT PADDING */
#r1c1 {
	grid-area: r1c1;
	background: linear-gradient(to left, rgba(100, 100, 100, 0.5), rgba(100, 100, 100, 1));
}

/* CONTENT */
#r1c2 {
	grid-area: r1c2;
	background-color: rgba(100, 100, 100, 0.5);
	min-height: 100vh;
}

/* LEFT PADDING */
#r1c3 {
	grid-area: r1c3;
	background-color: transparent;
	background: linear-gradient(to right, rgba(100, 100, 100, 0.5), rgba(100, 100, 100, 1));
}
</style>