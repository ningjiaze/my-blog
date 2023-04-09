<template>
  <div class="warp">
    <above />
    <below />
  </div>
</template>
<script lang="ts">
import above from "./components/above/index.vue";
import below from "./components/below/index.vue";
export default {
  name: "homeLayout",
  components: {
    below,
    above,
  },
};
</script>
<style lang="scss" scoped>
.warp {
  width: 100%;
  background: url("@/assets/home1/bg1.jpg") no-repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow-x: hidden;
}
</style>
