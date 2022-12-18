<template>
    <div>
    </div>
</template>

<script>

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