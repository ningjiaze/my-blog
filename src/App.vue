<template>
  <div>
    <router-view />
  </div>
</template>
<script lang="ts">
export default {
  name: "App",
};
</script>
<style lang="scss">
body {
  margin: 0;
  background-color: #000;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
