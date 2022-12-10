<template>
	<div>
		<Header/>
			<div class="content-wrapper">
				<img id="bckg_img">	



			</div>
		<Footer/>
	</div>
</template>



<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
    showModal: true,
    components: {
		Footer,
        Header
	},
	data() {
		return {
			products: [],
		}
	},
	mounted() {
		document.getElementById('bckg_img').src = require('@/assets/images/background_white_pattern_triangles.png');
	},
	methods: {
	
	},
    computed: {

    },
}

</script>



<style scoped>
#message_top {
	background-color: #f5f5f5;
	padding: 10px;
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

</style>