<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="app">
    <div class="container">
      <AppHeader />
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.app {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background-color: var(--bg-color);

  display: flex;
  justify-content: center;
}
.container {
  position: relative;
  width: 100%;
  max-width: 1240px;
  margin-top: 100px;
  padding: 0px 20px;

  display: flex;
  flex-direction: column;
  gap: 25px;
}

@media (max-width: 576px) {
  .container {
    padding: 0px 10px;
  }
}
</style>
