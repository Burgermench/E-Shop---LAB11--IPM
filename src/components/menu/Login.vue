<template>
	<div>
		<h1>Login</h1>
		<hr>
		<form style="text-align: right; margin-right: 50vw;" @submit.prevent="handleSubmit">
			<div style="margin-bottom:15px;">
				<label style="position:relative; margin-right: 5px;" for="name">Name</label>
				<input style="position:absolute;" type="text" id="name" v-model="user.name"
					placeholder="your username" required>
			</div>
			<div style="margin-bottom:15px;">
				<label style="position:relative; margin-right: 5px;" for="email">Email</label>
				<input style="position:absolute;" type="email" id="email" v-model="user.email" placeholder="your e-mail" required>
			</div>
			<div style="margin-bottom:15px;">
				<label style="position:relative; margin-right: 5px;" for="password">Password</label>
				<input style="position:absolute;" type="password" id="password" v-model="user.password"
					placeholder="your password" required>
			</div>
			<div>
				<button style="position:relative; margin-top: 10px;" type="submit">Login</button>
			</div>
		</form>
	</div>
</template>


<script>
export default {
	components: {

	},

	data() {
		return {
			user: {
				name: '',
				email: '',
				password: '',
			},
			submitting: false,
			error: false,
		}
	},

	created() {
		console.clear()
	},

	mounted() {

	},

	destroyed() {

	},

	methods: {
		handleSubmit: function () {
			this.submitting = true
			if (this.invalidName || this.invalidPassword || this.invalidEmail) {
				this.error = true
				return
			}
			this.loginUser(this.user)
		},

		async loginUser(user) {
			await this.$store.dispatch('user/loginUser', user).then(() => {
				this.getOrdersFromDb()
			})
		},

		async getOrdersFromDb() {
			await this.$store.dispatch('orders/getMyOrdersFromDB').then(() => {
				alert("Welcome back " + this.$store.getters['user/getUser'].name + "!")
				this.$router.push('/menu')
			})
		},

		clearStatus() {
			this.user.password = ''
			this.submitting = false
			this.error = true
		},

	},

	computed: {
		invalidName: function () {
			if (this.user.name === '') {
				alert("name must not be empty")
				return true
			} else {
				return false
			}
		},

		invalidEmail: function () {
			if (this.user.email=== '') {
				alert("email must not be empty")
				return true
			} else {
				return false
			}
		},

		invalidPassword: function () {
			if (this.user.password === '') {
				alert("password cannot be empty");
				return true
			} else {
				return false
			}
		},

	},
}
</script>

<style lang="scss" scoped>
/* DEBUG */
$debug: false;

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
</style>