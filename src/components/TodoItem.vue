<script setup lang="ts">
import type { ITodo } from '@/types/todosTypes'
import { useGetTodoInfo } from '@/hooks/useGetTodoInfo'

const { todo } = defineProps<{
  todo: ITodo
}>()

defineEmits(['delete', 'update'])

const { daysString, datesString, isDays, isDates } = useGetTodoInfo(todo)
</script>

<template>
  <li class="todo">
    <v-icon class="calendar" name="bi-calendar-week-fill" scale="1.8"></v-icon>
    <div class="info">
      <span v-if="isDays">{{ daysString }}</span>
      <span v-if="isDates">дни: {{ datesString }}</span>
    </div>
    <div class="content">
      {{ todo.content }}
    </div>
    <button class="settings" @click="$emit('update', todo)">
      <v-icon name="bi-gear-fill" scale="2" />
    </button>
    <button class="delete" @click="$emit('delete', todo.id)">
      <v-icon name="bi-x-circle-fill" scale="2" />
    </button>
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
  background-color: #e5ede1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.1rem;
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
.calendar {
  margin-left: 10px;

  color: var(--btn-color);
}
.info {
  width: 135px;
  padding: 0px 5px;

  display: flex;
  flex-direction: column;

  font-size: 0.8rem;
  font-weight: 500;
}
.content {
  flex-grow: 1;

  text-align: center;
}
.settings {
  height: 100%;
  padding: 0px 10px;
  border-left: 1px solid var(--border-color);

  color: #5c8374;
}
.settings:hover {
  color: #79978b;
}
.delete {
  height: 100%;
  padding: 0px 10px;
  border-left: 1px solid var(--border-color);

  color: #be6c64;
}
.delete:hover {
  color: #d78c85;
}
</style>
