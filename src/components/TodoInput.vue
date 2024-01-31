<script setup lang="ts">
import { ref } from 'vue'

const inputText = ref('')

const emit = defineEmits(['create'])

const handleCreateToto = () => {
  emit('create', { inputText: inputText.value })
  inputText.value = ''
}
</script>

<template>
  <div class="container">
    <div class="creation__block">
      <InputUI v-model="inputText" />
      <button class="add__btn" @click="handleCreateToto">
        <v-icon name="bi-plus-square-fill" scale="2.2"></v-icon>
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  padding: 20px 0px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #0000004b;
  background-color: #f8fae5;
}
.creation__block {
  width: 100%;
  max-width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 20px;
}
.add__btn {
  height: 100%;

  color: var(--btn-color);
}
.add__btn:hover {
  color: var(--btn-color-hover);
}
</style>
