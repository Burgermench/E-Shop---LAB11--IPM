<template>
	<div id="app">
		<div id="content-wrapper">
			<div id="msg1">
				<h1>Find all the components you need</h1>
			</div>
			<img id="bckg_img">
			<div id="button">
				&rarr; 
				<button
					id="cpu_btn"
					@click="$router.push('/Menu')"
				>
					<img id="cpu_img">
				</button>
				&larr;
			</div>
			<div id="msg2">
				<h1>At the best prices!</h1>
			</div>
		</div>
	</div>
</template>



<script>

export default {
	name: "Home",

	data() {
		return {
			window: {
				width: 0,
				height: 0,
			},
		}
	},

	created() {
		console.clear();
		this.fetchCategories();
		this.fetchProducts();
		window.addEventListener('resize', this.handleResize);
	},

	mounted() {
		this.resize();
		document.getElementById('bckg_img').src = require('@/assets/images/home_background.png');
		document.getElementById('cpu_img').src = require('@/assets/images/cpu.png');
	},

	destroyed() {
		window.removeEventListener('resize', this.handleResize);
	},

	methods: {
		async fetchCategories() {
            await this.$store.dispatch('categories/getCategoriesFromDB')
		},
		async fetchProducts() {
			await this.$store.dispatch('products/getProductsFromDB');
		},
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
$debug: false;

@mixin debug(){
	border-style: dashed;
	border-color: red;
	border-width: 1px;
}

div {
	@if $debug {
		@include debug();
	}
}

// APP
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

// GRIDS
#content-wrapper {
	position: fixed;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "bckg_img";
}

#bckg_img {
	grid-area: bckg_img;
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: -1;
}

#c1 {
	position: fixed;
	width: 50%;
	height: 100%;
	margin-left: 25%;
	margin-right: 25%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 90%, 10%;
	grid-template-areas: "cpu_btn" "msg_board";
}

/* CPU BUTTON */

$button_xpos: 37vw;
$button_ypos: 33vh;

$button_width: 21vw;
$button_height: 32vh;

@mixin cpu_button() {
	grid-area: cpu_btn;
	position: fixed;
	margin-left: $button_xpos;
	margin-top: $button_ypos;
	width: $button_width;
	height: $button_height;
	z-index: 0;
	background: transparent;
}

#cpu_btn {
	@include cpu_button();
	
	&:hover {
		@include cpu_button();
		width: $button_width - .2vw;
		height: $button_height - .2vh;
		margin-left: $button_xpos + .1vw;
		margin-top: $button_ypos + .1vh;
	}

	&:active {
		@include cpu_button();
		width: $button_width - 2vw;
		height: $button_height - 2vh;
		margin-left: $button_xpos + 1vw;
		margin-top: $button_ypos + 1vh;
	}

	&:focus {
		@include cpu_button();
		width: $button_width - 2vw;
		height: $button_height - 2vh;
		margin-left: $button_xpos + 1vw;
		margin-top: $button_ypos + 1vh;
	}
}

#cpu_img {
	margin-top: -.5vh;
	margin-left: -.5vw;
	width: 110%;
	height: 105%;
	z-index: 1;
}

// Message board
#msg_board {
	grid-area: msg_board;
	position: fixed;
	margin-left: 37vw;
	margin-top: 65vh;
	width: 21vw;
	height: 10vh;
	z-index: 0;
	text-align: center;
	font-size: 1.5em;
}

#msg1 {
	//text centered
	position: fixed;
	margin-left: 20vw;
	margin-top: 22vh;
	color: white;
	//give the text some shadow
	text-shadow: 1px 1px 1px #000;
	z-index: 0;
	font-size: 1.5em;
}

#msg2 {
	position: fixed;
	margin-left: 53vw;
	margin-top: 70vh;
	color:white;
	//give the text some shadow
	text-shadow: 1px 1px 1px #000;
	z-index: 0;
	text-align: center;
	font-size: 1.5em;
}

</style>