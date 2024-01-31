<script setup lang="ts">
import { useGetCurrentTodos } from '@/hooks/useGetCurrentTodos'
import { useCreateTodo } from '@/hooks/useCreateTodo'
import { useCompleteTodo } from '@/hooks/useCompleteTodo'

import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
import CurrentTodo from '@/components/CurrentTodo.vue'

const currentTodos = useGetCurrentTodos()

const createTodo = useCreateTodo(currentTodos, 'currentTodos')

const completeTodo = useCompleteTodo(currentTodos, 'currentTodos')
</script>

<template>
  <TodoInput @create="createTodo" />
  <div class="todos__container">
    <TodoList :todos="currentTodos">
      <CurrentTodo
        v-for="todo in currentTodos"
        :key="todo.id"
        :todo="todo"
        @confirm="completeTodo"
      />
    </TodoList>
    <div class="empty" v-if="currentTodos.length === 0">Список задач пуст</div>
  </div>
</template>

<style scoped>
.todos__container {
  margin-bottom: 60px;
  padding: 25px 0px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #0000004b;
  background-color: var(--bg-content-color);

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.empty {
  font-size: 1.5rem;
  color: #8d7b68;
}
</style>
