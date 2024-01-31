import type { ITodo } from '@/types/todosTypes'
import { onMounted, reactive } from 'vue'

export function useGetEditableTodos() {
  const todos: ITodo[] = reactive([])

  onMounted(() => {
    const initialTodos = localStorage.getItem('todos')

    if (initialTodos === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      todos.push(...JSON.parse(initialTodos))
    }
  })

  return todos
}
