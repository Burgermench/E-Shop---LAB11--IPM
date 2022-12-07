<template>
  <div id="app">
	<v-img
		contain
		lazy-src="@/assets/images/home_background.jpg" 
		max-height="280" 
		max-width="482" 
		src="@/assets/images/home_background.jpg"
		id="background_image"
	>
		<div>
			<h1 class="title is-1">
				Your Window
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
	</v-img>
    <h1>{{ msg }}</h1>
  </div>
</template>



<script>
export default {
	name: "Home",
	data() {
		return {
			image: {
				backgroundImage: "@/assets/images/home_background.jpg"
			},
			window: {
				width: 0,
				height: 0
			},
			msg: 'Welcome to Your LAB11 Vue App',
		}
	},
	mounted() {
		
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

#showoff {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
	color: black;	
    background: linear-gradient($top-color, $bottom-color);
}

</style>