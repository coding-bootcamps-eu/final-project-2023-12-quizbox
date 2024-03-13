import { createRouter, createWebHistory } from 'vue-router'
import QuizboxView from '@/views/QuizboxView.vue'
import QuestionsView from '@/views/QuestionsView.vue'
import SessionView from '@/views/SessionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quizbox',
      component: QuizboxView
    },
    {
      path: '/questions',
      name: 'questions',
      component: QuestionsView
    },
    {
      path: '/session',
      name: 'session',
      component: SessionView
    }
  ]
})
export default router
