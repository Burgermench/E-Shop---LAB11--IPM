<template>
  <div id="app">
	<div :style="image"></div>
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
	methods: {

	},
	computed: {

	},

}
</script>



<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-image: url('../assets/images/home_background.jpg');
	background-repeat: no-repeat;
	background-size: contain;
}

@media screen and (max-width: 600px) {
	#app {
		margin-top: 0;
	}	
}
</style>