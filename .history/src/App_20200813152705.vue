
<style lang="less">
</style>

<template>
  <div id="app">
    <Home />
    <router-view />
  </div>
</template>

<script>
import Home from "./views/Home";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
  },
};
</script>
