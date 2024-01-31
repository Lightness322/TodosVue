import type { ITodo } from '@/types/todosTypes'
import type { Ref } from 'vue'

export function useOpenUpdateForm(selectedTodo: ITodo, isUpdateModalShow: Ref<boolean>) {
  const openUpdateForm = (todo: ITodo) => {
    selectedTodo.content = todo.content
    selectedTodo.dates = todo.dates
    selectedTodo.days = todo.days
    selectedTodo.id = todo.id
    isUpdateModalShow.value = true
  }

  return openUpdateForm
}
