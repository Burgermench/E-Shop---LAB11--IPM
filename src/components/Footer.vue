<template>
    <!-- if on the bottom of the page, make this div visible -->
    <div id="content-wrapper"
        
        >
        <div id="c1">
            &copy; 2022 Interfaces Pessoa-M&aacute;quina
        </div>
        <div id="c2">
            Designed by <a href="https://github.com/Burgermench/E-Shop---LAB11--IPM.git">a61149 - jmc</a>
        </div>
    </div>
</template>


<script>

</script>


<style lang="scss" scoped>
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

#content-wrapper {
    @include font();
    width: 100%;
    display: grid;
    grid-template-rows: 40px;
    grid-template-columns: 50% 50%;
    grid-template-areas: "c1 c2";
    position: relative;
    background-color: darkgrey;
}

#c1 {
    grid-area: c1;
    text-align: left;
    padding-top: 5px;
    padding-left: 20px;
    font-size: 16px;
}

#c2 {
    grid-area: c2;
    text-align: right;
    padding-top: 5px;
    padding-right: 20px;
    font-size: 16px;
}
</style>