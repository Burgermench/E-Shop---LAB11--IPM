<template>
  <div id="app">
		<div id="content-wrapper">
			<h1>
				{{ background.image }}
			</h1>
			<h3 class="title is-3">
				Width: {{ window.width }} px<br/>
				Height: {{ window.height }} px
			</h3>
			<p class="has-text-white">
				&uarr;<br/>
				&larr; resize window &rarr;<br/>
				&darr;
			</p>
		</div>
    <h1>{{ msg }}</h1>
  </div>
</template>






<script>
export default {
	name: "Home",
	data() {
		return {
			window: {
				width: 0,
				height: 0
			},
			background: {
				image: Image,
				width: window.width,
				height: window.height
			},
			msg: 'Welcome to Your LAB11 Vue App',
		}
	},
	mounted() {
		console.clear();
		this.background.image = new Image(this.background.width, this.background.height);
		this.background.image.src = '@/assets/images/home_background.jpg';
	},
	created() {
		window.addEventListener('resize', this.handleResize);
		this.handleResize();
	},
	destroyed() {
		window.removeEventListener('resize', this.handleResize);
	},
	methods: {
		handleResize() {
			this.window.width = window.innerWidth;
			this.window.height = window.innerHeight;
		}
	},
	computed: {

	},

}
</script>






<style lang="scss" scoped>
$top-color: yellow;
$bottom-color: tomato;

html,
#app,

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#content-wrapper {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
	color: black;	
}

</style>