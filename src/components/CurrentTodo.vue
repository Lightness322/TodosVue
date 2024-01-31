<script setup lang="ts">
import type { ITodo } from '@/types/todosTypes'

defineProps<{
  todo: ITodo
}>()

defineEmits(['confirm', 'postpone'])
</script>

<template>
  <li class="todo">
    <button class="confirm" @click="$emit('confirm', todo.id)">
      <v-icon class="icon" name="ri-checkbox-circle-fill" scale="2" />
    </button>
    <div class="content">
      {{ todo.content }}
    </div>
  </li>
</template>

<style scoped>
.todo {
  width: 100%;
  height: 60px;
  margin: 0 auto;
  border: 2px solid var(--border-color);
  border-radius: 20px;
  box-shadow: 5px 5px 10px #0000002b;
  background-color: var(--todo-color);

  display: flex;
  align-items: center;

  font-size: 1.1rem;
}
.confirm {
  height: 100%;
  padding: 0px 10px;
  border-right: 1px solid var(--border-color);

  color: var(--btn-color);
}
.confirm:hover {
  color: var(--btn-color-hover);
}
.content {
  flex-grow: 1;

  text-align: center;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  transform: translateY(30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
@media (max-width: 576px) {
  .todo {
    font-size: 1rem;
  }
}
@media (max-width: 450px) {
  .todo {
    font-size: 0.95rem;
  }
  .icon {
    max-height: 30px;
  }
  .confirm {
    padding: 0px 2px;
  }
}
</style>
