<template>
	<div>
		<Header/>
			<div class="content-wrapper">
				



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

</style>