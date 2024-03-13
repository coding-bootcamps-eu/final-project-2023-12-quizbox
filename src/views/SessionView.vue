<template>
  <div v-if="currentIndex < questions.length">
    <div>{{ currentIndex + 1 }} / {{ questions.length }}</div>
    <div>{{ questions[currentIndex] }}</div>
    <button @click="next()">Next</button>
  </div>
  <div v-else>
    <div>Session finished</div>
    <RouterLink :to="{ name: 'quizbox' }">Back to Home</RouterLink>
  </div>
</template>

<script>
import questions from '@/data/questions.json'

export default {
  name: 'QuizboxSession',

  data() {
    return {
      questions: questions['basic-js'].slice(0, 5),
      currentIndex: 0
    }
  },
  methods: {
    next() {
      this.currentIndex = this.currentIndex + 1
    }
  }
}
</script>
