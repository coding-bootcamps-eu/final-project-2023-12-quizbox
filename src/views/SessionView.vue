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
      questions: [],
      currentIndex: 0
    }
  },
  methods: {
    next() {
      this.currentIndex = this.currentIndex + 1
    }
  },
  mounted() {
    const numberQuestions = parseInt(this.$route.query.numberQuestions) || 15
    const questionsToChooseFrom = []

    if (this.$route.query['basic-js'] == '1') {
      questionsToChooseFrom.push(...questions['basic-js'])
    }

    // Shuffle array
    const shuffled = questionsToChooseFrom.sort(() => 0.5 - Math.random())

    // Get sub-array of first n elements after shuffled
    this.questions = shuffled.slice(0, numberQuestions)
  }
}
</script>
