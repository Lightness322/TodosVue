import type { ITodo } from '@/types/todosTypes'
import type { Ref } from 'vue'

interface ICreateTodoParams {
  inputText: string
  days?: number[]
  dates?: number[]
}

export function useCreateTodo(
  todoList: ITodo[],
  localStorageKey: string,
  isModalShow?: Ref<boolean>
) {
  const createTodo = ({ inputText, days = [], dates = [] }: ICreateTodoParams) => {
    const newTodo: ITodo = {
      id: Math.round(Math.random() * 100000),
      content: inputText,
      days,
      dates
    }

    todoList.push(newTodo)

    localStorage.setItem(localStorageKey, JSON.stringify([...todoList]))

    if (isModalShow !== undefined) {
      isModalShow.value = false
    }
  }

  return createTodo
}
