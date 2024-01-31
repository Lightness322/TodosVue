<script setup lang="ts">
defineOptions({
  name: 'ButtonUI'
})
</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 10px;
  border: 2px solid var(--btn-color);
  background-color: var(--btn-color);
  border-radius: 10px;

  font-weight: 500;
  color: white;
}
.btn:hover {
  background-color: white;

  color: var(--btn-color);
}
@media (max-width: 576px) {
  .btn {
    font-size: 0.9rem;
  }
}
</style>
