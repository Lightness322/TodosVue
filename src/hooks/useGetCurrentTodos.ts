import type { ITodo } from '@/types/todosTypes'
import { onMounted, reactive } from 'vue'

export function useGetCurrentTodos() {
  const currentTodos: ITodo[] = reactive([])

  onMounted(() => {
    const currentDay = new Date().getDay()

    const currentDate = new Date().getDate()

    const lastUpdateFullDate = localStorage.getItem('lastUpdate')

    if (lastUpdateFullDate === null) {
      localStorage.setItem('lastUpdate', '')
    }

    const currentFullDate = new Date().toISOString().slice(0, 10)

    if (lastUpdateFullDate === currentFullDate) {
      const initialTodosStr = localStorage.getItem('currentTodos')!
      currentTodos.push(...JSON.parse(initialTodosStr))
      return null
    } else {
      const customizedTodosStr = localStorage.getItem('todos') ?? '[]'
      if (customizedTodosStr === '[]') {
        localStorage.setItem('currentTodos', JSON.stringify([]))
      }

      const customizedTodos: ITodo[] = JSON.parse(customizedTodosStr).filter(
        (todoObj: ITodo) => todoObj.days.includes(currentDay) || todoObj.dates.includes(currentDate)
      )

      const initialTodosStr = localStorage.getItem('currentTodos') ?? '[]'
      if (initialTodosStr === '[]') {
        localStorage.setItem('currentTodos', JSON.stringify([]))
      }

      const initialTodos: ITodo[] = JSON.parse(initialTodosStr)

      currentTodos.push(...initialTodos, ...customizedTodos)

      localStorage.setItem('lastUpdate', currentFullDate)
    }
  })

  return currentTodos
}
