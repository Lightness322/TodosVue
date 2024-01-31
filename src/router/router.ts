import { createRouter, createWebHistory } from 'vue-router'

import CurrentTodosPage from '@/pages/CurrentTodosPage.vue'
import TodosEditorPage from '@/pages/TodosEditorPage.vue'

const routes = [
  {
    path: '/',
    component: CurrentTodosPage
  },
  {
    path: '/editor',
    component: TodosEditorPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
