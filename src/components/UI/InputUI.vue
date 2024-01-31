<script setup lang="ts">
defineOptions({
  name: 'InputUI'
})

const model = defineModel()
</script>

<template>
  <input class="input" v-model="model" placeholder="Текст задачи..." type="text" />
</template>

<style scoped>
.input {
  padding: 15px 10px;
  border: 2px solid var(--border-color);
  border-radius: 5px;

  flex-grow: 1;

  font-size: 1.1rem;
}
</style>
