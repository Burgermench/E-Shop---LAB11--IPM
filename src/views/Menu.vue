<template>
	<div>
		<div id="content-wrapper">
			<Header/>
			<div id="r1">
				<div id="r1c1"></div>

				<!-- CONTENT START -->
				<div id="r1c2">
					<!-- MENU STRUCTURE -->
					<div v-if="categoryId === undefined">
						<Landing/>
					</div>
					<!-- CATEGORY STRUCTURE -->
					<div v-else-if="categoryId === ':Motherboards'">
						<Motherboards/>
					</div>
					<div v-else-if="categoryId === ':Processadores'">
						<Processors/>
					</div>
					<div v-else-if="categoryId === ':Graficas'">
						<Graphics/>
					</div>
					<div v-else-if="categoryId === ':Alimentacoes'">
						<PowerSupplies/>
					</div>
					<div v-else-if="categoryId === ':Torres'">
						<Cases/>
					</div>
					<div v-else-if="categoryId === ':Rams'">
						<Ram/>
					</div>
					<div v-else-if="categoryId === ':Armazenamento'">
						<Storage/>
					</div>
					<div v-else>
						<h1>Category not found</h1>
						<h1>CategoryId: ({{categoryId}})</h1>
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
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Landing from '@/components/menu/Landing.vue'
import Motherboards from '@/components/menu/categories/Motherboards.vue'
import Processors from '@/components/menu/categories/Processors.vue'
import Graphics from '@/components/menu/categories/Graphics.vue'
import PowerSupplies from '@/components/menu/categories/PowerSupplies.vue'
import Cases from '@/components/menu/categories/Cases.vue'
import Ram from '@/components/menu/categories/Ram.vue'
import Storage from '@/components/menu/categories/Storage.vue'


export default {
	showModal: false,
    components: {
		Footer,
		Header,
		Landing,
		Motherboards,
		Processors,
		Graphics,
		PowerSupplies,
		Cases,
		Ram,
		Storage,
	},
	
	data() {
		return {
			categoryId: undefined,
			products: [],
		}
	},

	
	created() {

	},

	mounted() {
		this.setCategoryId();
	},

	watch: {
		'$route'(to, from) {
			if(to !== from)
				this.setCategoryId();
		}
	},

	destroyed() {

	},

	methods: {
		setCategoryId() {
			this.categoryId = this.$route.params.categoryId;
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
	grid-template-columns: 100%;
	grid-template-rows: auto auto auto auto auto;
	grid-template-areas: 'content-r1' 'content-r2' 'content-r3' 'content-r4' 'content-r5';
}

/* LEFT PADDING */
#r1c3 {
	grid-area: r1c3;
	background-color: transparent;
	background: linear-gradient(to right, rgba(100, 100, 100, 0.5), rgba(100, 100, 100, 1));
}
</style>