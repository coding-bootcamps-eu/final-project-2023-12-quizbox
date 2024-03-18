<template>
  <div v-if="currentIndex < questions.length">
    <div class="questions">
      <div class="circle">
        <div>{{ currentIndex + 1 }} / {{ questions.length }}</div>
      </div>
      <div class="question_style">{{ questions[currentIndex] }}</div>
    </div>
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
    const rootRoute = this.$route.query
    const keysWithValueOne = []

    function findKeysWithValueOne(obj) {
      for (const key in obj) {
        if (obj[key] === '1') {
          keysWithValueOne.push(key)
        }
      }
      return keysWithValueOne.length > 0 ? keysWithValueOne : null
    }

    console.log(keysWithValueOne)
    findKeysWithValueOne(rootRoute)

    for (let i = 0; i < keysWithValueOne.length; i++) {
      questionsToChooseFrom.push(...questions[keysWithValueOne[i]])
    }

    // Shuffle array
    const shuffled = questionsToChooseFrom.sort(() => 0.5 - Math.random())
    console.log(shuffled)

    // Get sub-array of first n elements after shuffled
    this.questions = shuffled.slice(0, numberQuestions)
  }
}
</script>
<style>
.questions {
  font-family: var(--font-sourcesanspro);
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
}
.circle {
  margin-bottom: 10px;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #6a1cc3;
}
.question_style {
  font-size: 30px;
}
</style>
