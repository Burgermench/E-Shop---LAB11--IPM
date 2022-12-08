<template>
	<div id="app">
		<div id="content-wrapper">
			
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
			msg: 'Tap the cpu to procede...',
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
	margin-left: -1vw;
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


</style>