<template>
	<div>
		<div id="content-wrapper">
			<Header/>
			<div id="r1">
				<div id="r1c1">
					
				</div>
				<div id="r1c2">
				
				</div>
				<div id="r1c3">
				
				</div>
			</div>
		</div>
		<Footer/>
	</div>
</template>



<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
	showModal: false,
    components: {
		Footer,
        Header
	},
	
	data() {
		return {
			category: null,
			window: {
				width: 0,
				height: 0,
			},
			products: [],
		}
	},

	
	created() {

	},

	mounted() {

	},

	destroyed() {

	},

	methods: {

	},
	
	computed: {

    },
}
</script>



<style lang="scss" scoped>
/* DEBUG */
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
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	color: #000;
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
	grid-template-columns: 10% auto 10%;
	grid-template-rows: 100vh;
	grid-template-areas: 'r1c1 r1c2 r1c3';
}

#r1c1 {
	grid-area: r1c1;
	background-color: transparent;
}

#r1c2 {
	grid-area: r1c2;
	background-color: transparent;
}

#r1c3 {
	grid-area: r1c3;
	background-color: transparent;
}

</style>