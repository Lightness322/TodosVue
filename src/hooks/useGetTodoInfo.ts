import type { ITodo } from '@/types/todosTypes'
import { computed } from 'vue'

export function useGetTodoInfo(todo: ITodo) {
  const daysNames = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

  const daysString = computed(() => {
    const days = todo.days

    return days.length !== 7 ? days.map((day) => daysNames[day]).join(' ') : 'ежедневно'
  })
  const datesString = computed(() => todo.dates.join(' '))

  const isDays = computed(() => todo.days.length !== 0)

  const isDates = computed(() => todo.dates.length !== 0)

  return { daysString, datesString, isDays, isDates }
}
