<template>
    <div>
        <h1>Bye, see you soon!</h1>
    </div>
</template>

<script>
export default {
    name: 'Logout',
    data() {
        return {
        }
    },
    created() {
        this.$store.dispatch('user/logoutUser')
        setTimeout(() => {
            this.$router.push('/menu')
        }, 2000)
    }
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

@mixin font() {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-style: normal;
}
</style>