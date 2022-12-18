<template>
	<div>
		<div v-if="isLoggedIn">
			<h1>Log out first.</h1>
		</div>
		<div v-else>
			<h1>Register</h1>
			<hr>
			<form style="text-align: right; margin-right: 50vw;" @submit.prevent="handleSubmit">
				<div>
					<label style="position:relative;" for="name">Name</label>
					<input style="position:absolute;" type="text" id="name" v-model="user.name" placeholder="your username" required>
				</div>
				<div>
					<label style="position:relative;" for="email">Email</label>
					<input style="position:absolute;" type="email" id="email" v-model="user.email" placeholder="your e-mail" required>
				</div>
				<div>
					<label style="position:relative;" for="password">Password</label>
					<input style="position:absolute;" type="password" id="password" v-model="user.password" placeholder="your password" required>
				</div>
				<div>
					<label style="position:relative;" for="passwordConfirmation">Password Confirmation</label>
					<input style="position:absolute;" type="password" id="passwordConfirmation" v-model="passwordConfirmation" placeholder="repeat the password" required>
				</div>
				<div>
					<button style="position:relative; margin-top: 10px;" type="submit">Register</button>
				</div>
			</form>
		</div>
	</div>
</template>


<script>
export default {
	components: {

	},

	data() {
		return {
			isLoggedIn: false,
			user: {
				name: '',
				email: '',
				password: '',
			},
			passwordConfirmation: '',
			submitting: false,
			error: false,
      }
	},
	
	created() {
		console.clear()
		this.isLoggedIn = this.userLoggedIn
	},

	mounted() {

	},

	destroyed() {

	},

	methods: {

		handleSubmit() {
			this.submitting = true
			// check input correctness
			if (this.invalidName || this.invalidEmail || this.invalidPassword || this.invalidRepeatPassword) {
				this.error = true
				this.clearStatus()
				return
			}
			// go to next stage
			this.userExists()
		},

		async userExists() {
			if (await this.$store.dispatch('user/userExists', this.user)) {
				alert("username already exists")
				this.error = true
				this.submitting = false
				return true
			} else {
				console.log("valid input, user with those credentials does not already exist, proceding")
				this.addUser()
			}
			this.$router.push('/menu/:Login')
		},

		async addUser() {
			console.log("adding user")
			if (await this.$store.dispatch('user/addUser', this.user)) {
				alert("registered successfully")
			}
			else {
				this.error = true
				this.submitting = false
				console.log("failed in adding user")
				return
			}
		},

		loginUser() {
			this.$store.dispatch('user/loginUser', this.user)
		},

		clearStatus() {
			this.user.password = ''
			this.passwordConfirmation = ''
			this.submitting = false
			this.error = true
		},

	},

	computed: {
		invalidName: function () {
			//console.log("name given is " + this.user.name)
			if (this.user.name === '' || this.user.name.match(/[0-9]/g) == null) {
				alert("name must contain at least one number")
				return true
			} else {
				console.log("valid inputted name: " + this.user.name)
				return false
			}
		},

		invalidPassword: function () {
			if (this.user.password === '' || this.user.password.length < 6) {
				alert("password cannot be empty or less than 6 characters");
				return true
			} else {
				console.log("valid inputted password: " + this.user.password)
				return false
			}
		},

		invalidRepeatPassword: function () {
			if (this.submitting && this.user.password !== this.passwordConfirmation) {
				alert("passwords dont match");
				return true
			} else {
				console.log("valid inputted passwords match: " + this.user.password + " " + this.passwordConfirmation)
				return false
			}
		},

		invalidEmail: function () {
			const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
			// ^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@ - the first part of the email is a string of characters that can be a-z, A-Z, 0-9, and some special characters
			// [a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$ - the second part of the email is a string of characters that can be a-z, A-Z, 0-9, and some special characters
			// the second part of the email can have multiple dots in it, and the dots can be followed by another string of characters that can be a-z, A-Z, 0-9, and some special characters
			if (!this.user.email.match(regex)) {
				alert("invalid email")
				return true
			} else {
				console.log("valid inputted user email: " + this.user.email)
				return false
			}
		},

		userLoggedIn: function () {
			if (this.$store.getters['user/getUser'].name !== '' && this.$store.getters['user/getUser'].name !== undefined) {
				alert("log out first!")
				return true
			} else {
				console.log("valid user previously unlogged: " + this.$store.getters['user/getUser'].name)
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