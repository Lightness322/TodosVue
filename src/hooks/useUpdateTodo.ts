import type { ITodo } from '@/types/todosTypes'
import type { Ref } from 'vue'

export function useUpdateTodo(
  todos: ITodo[],
  selectedTodo: ITodo,
  isUpdateModalShow: Ref<boolean>
) {
  const updateTodo = ({
    inputText,
    days,
    dates
  }: {
    inputText: string
    days: number[]
    dates: number[]
  }) => {
    const updateTodoIndex = todos.findIndex((todo) => todo.id === selectedTodo.id)

    todos[updateTodoIndex].content = inputText
    todos[updateTodoIndex].days = days
    todos[updateTodoIndex].dates = dates

    localStorage.setItem('todos', JSON.stringify(todos))

    isUpdateModalShow.value = false
  }

  return updateTodo
}
