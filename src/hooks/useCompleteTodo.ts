import type { ITodo } from '@/types/todosTypes'

export function useCompleteTodo(todoList: ITodo[], localStorageKey: string) {
  const completeTodo = (todoId: number) => {
    const completeTodoIndex = todoList.findIndex((todo) => todo.id === todoId)

    todoList.splice(completeTodoIndex, 1)

    localStorage.setItem(localStorageKey, JSON.stringify(todoList))
  }

  return completeTodo
}
