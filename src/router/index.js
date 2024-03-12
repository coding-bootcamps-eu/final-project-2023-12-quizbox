import { createRouter, createWebHistory } from 'vue-router'
import QuizboxView from '@/views/QuizboxView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quizbox',
      component: QuizboxView
    }
  ]
})

export default router
