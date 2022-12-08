<template>
	<div id="app">
		<div id="content-wrapper">
			
			<img id="bckg_img">

			<div id="r1c1">
				&rarr; <button id="cpu_btn"> <img id="cpu_img"> </button> &larr;
			</div>
			
			<div id="debug">
				{{ msg }}<br>
				Width: {{ window.width }} px<br/>
				Height: {{ window.height }} px
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
				width: 50,
				height: 50,
			},
			msg: 'Debug msg',
		}
	},

	created() {
		console.clear();
		window.addEventListener('resize', this.handleResize);
	},

	mounted() {
		this.resize();
		document.getElementById('bckg_img').src = require('@/assets/images/home_background.jpg');
		document.getElementById('cpu_img').src = require('@/assets/images/cpu.png');
	},

	destroyed() {
		window.removeEventListener('resize', this.handleResize);
	},

	methods: {
		resize() {
			this.window.width = window.innerWidth;
			this.window.height = window.innerHeight;
		}
	},

	computed: {

	},

}
</script>






<style lang="scss" scoped>
// DEBUG
$debug: true;

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
	grid-template-rows: 20%, 80%;
	grid-template-areas: "c1r1" "c1r2";
}

#c1r1 {
	grid-area: c1r1;
	position: fixed;
	width: 100%;
	height: 100%;
}

#c1r2 {
	grid-area : c1r2;
	position: fixed;
	width: 100%;
	height: 100%;
}

/* CPU BUTTON */

// We want it to gradually shrink when hovered
// and more rapidly shrink when clicked
// and then grow back to normal when released

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
		width: $button_width - 1vw;
		height: $button_height - 1vh;
		margin-left: $button_xpos + .5vw;
		margin-top: $button_ypos + .5vh;
	}

	&:active {
		@include cpu_button();
		width: $button_width - 2vw;
		height: $button_height - 2vh;
		margin-left: $button_xpos + 1vw;
		margin-top: $button_ypos + 1vh;
	}
}

$cpu_img_width: 110%;
$cpu_img_height: 105%;

#cpu_img {
	margin-top: -.5vh;
	margin-left: -1vw;
	width: $cpu_img_width;
	height: $cpu_img_height;
	z-index: 1;
}

</style>