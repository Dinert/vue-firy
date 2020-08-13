<style lang="less" scoped>
    .home-x{
        height: 100%;
    }
    .home-logo{
        background: url("../../assets/img/1-2.png") no-repeat;
        background-size: 13.142rem 100%;
        background-position: right center;
        height: 11.625rem;
        width: 13.15rem;
        position: absolute;
        top: 4.1rem;
        left: 1rem;
    }
</style>

<template>
    <div class="home-x">
        <i class="home-logo"></i>
        <div class="home-start"></div>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>