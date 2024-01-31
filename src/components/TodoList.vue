<script setup lang="ts">
import type { ITodo } from '@/types/todosTypes'

defineProps<{
  todos: ITodo[]
}>()

defineEmits(['confirm', 'postpone'])
</script>

<template>
  <TransitionGroup v-show="todos.length > 0" name="list" tag="ul" class="todos">
    <slot></slot>
  </TransitionGroup>
</template>

<style scoped>
.todos {
  width: 100%;
  max-width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (max-width: 576px) {
  .todos {
    max-width: 100%;
    padding: 0 15px;
  }
}
</style>
