<template>
    <div>
        <h1>Processors</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
        }
    },

    created() {

    },

    mounted() {

    },

    methods: {

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
</style>