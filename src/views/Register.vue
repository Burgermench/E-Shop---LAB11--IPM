<template>
	<div>
		<div id="content-wrapper">
			<canvas id="bckg_img"></canvas>
			<Header />



			<Footer />
		</div>
	</div>
</template>


<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
	components: {
		Footer,
        Header
	},
	data() {
      return {	
        user: {
			name: '',
			email: '',
			password: '',
        },
		passwordConfirmation: '',
		submitting: true,
		error: true,
		window: {
			width: 0,
			height: 0,
		},
		
      }
	},
	
	created() {
		window.addEventListener('resizeWindow', this.handleResizeWindow);
	},

	mounted() {
		this.resizeWindow();
		this.getImageResized("bckg_img", this.window.width, this.window.height, require('@/assets/images/background_white_pattern_triangles.png'));
	},

	destroyed() {
		window.removeEventListener('resizeWindow', this.handleResizeWindow);
	},

	methods: {
		getImageResized(elementId, w, h, source) {
			var img = new Image(),
				canvas = document.getElementById(elementId),
				ctx = canvas.getContext("2d");
			img.onload = () => {
				if (w == undefined) {
					canvas.width = (img.naturalWidth * h) / img.naturalHeight;
				} else {
					canvas.width = w;
				}
				if (h == undefined) {
					canvas.height = (img.naturalHeight * w) / img.naturalWidth;
				} else {
					canvas.height = h;
				}
				if (h == undefined && w == undefined) {
					canvas.width = img.naturalWidth;
					canvas.height = img.naturalHeight;
				}
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

			};
			img.src = source;
			return img;
		},

		resizeWindow() {
			this.window.width = window.innerWidth;
			this.window.height = window.innerHeight;
		},

		handleResizeWindow() {
			this.resizeWindow();
		},
	},
}
</script>

<style scoped>
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
</style>