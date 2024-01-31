<script setup lang="ts">
import { useUpdateTodo } from '@/hooks/useUpdateTodo'
import { useOpenUpdateForm } from '@/hooks/useOpenUpdateForm'
import { useCreateTodo } from '@/hooks/useCreateTodo'
import { useCompleteTodo } from '@/hooks/useCompleteTodo'
import { useGetEditableTodos } from '@/hooks/useGetEditableTodos'

import type { ITodo } from '@/types/todosTypes'
import { ref, reactive } from 'vue'

import TodoList from '@/components/TodoList.vue'
import TodoForm from '@/components/TodoForm.vue'
import TodoItem from '@/components/TodoItem.vue'

const todos = useGetEditableTodos()

const isCreateModalShow = ref(false)
const isUpdateModalShow = ref(false)

const selectedTodo: ITodo = reactive({} as ITodo)

const createTodo = useCreateTodo(todos, 'todos', isCreateModalShow)

const completeTodo = useCompleteTodo(todos, 'todos')

const openUpdateForm = useOpenUpdateForm(selectedTodo, isUpdateModalShow)

const updateTodo = useUpdateTodo(todos, selectedTodo, isUpdateModalShow)
</script>

<template>
  <ModalUI
    style="background-color: var(--bg-content-color)"
    :isShow="isCreateModalShow"
    @close="() => (isCreateModalShow = !isCreateModalShow)"
  >
    <TodoForm @create="createTodo" />
  </ModalUI>
  <ModalUI
    style="background-color: var(--bg-content-color)"
    :isShow="isUpdateModalShow"
    @close="() => (isUpdateModalShow = !isUpdateModalShow)"
  >
    <TodoForm @update="updateTodo" :todo="selectedTodo" />
  </ModalUI>
  <div class="todos__container">
    <div class="btn__row">
      <ButtonUI @click="isCreateModalShow = true">Создать задачу</ButtonUI>
    </div>
    <TodoList :todos="todos">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete="completeTodo"
        @update="openUpdateForm"
      />
    </TodoList>
    <div class="empty" v-if="todos.length === 0">Список задач пуст</div>
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
  gap: 25px;
}
.btn__row {
  width: 100%;
  max-width: 80%;

  text-align: end;
}
.empty {
  flex-grow: 1;
  display: flex;
  align-items: center;

  font-size: 1.5rem;
  color: #8d7b68;
}
</style>
