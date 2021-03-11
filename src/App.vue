<template>
  <div id="app">
    <!--路由占位符-->
    <transition
      mode="out-in"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
    >
      <router-view
      style="animation-duration: 0.3s;"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
/* #app {
  pointer-events: none;
} */
</style>
