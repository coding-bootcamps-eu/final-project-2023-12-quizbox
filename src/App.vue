<template>
  <header>
    <h1 class="">
      Quizbox
      <div class="wrapper">
        <nav class="hamburger-menu" @click="hamburgerMenuIsOpen = !hamburgerMenuIsOpen">
          <span class="hamburger-menu__icon"></span>
          <span class="hamburger-menu__icon"></span>
          <span class="hamburger-menu__icon"></span>
        </nav>
      </div>
    </h1>
    <nav class="page-header__menu--secondary" v-if="hamburgerMenuIsOpen">
      <div class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link :to="{ name: 'quizbox' }" class="text--light-colored"
              >Play Quizbox</router-link
            >
          </li>
          <li class="nav__item">
            <router-link :to="{ name: 'questions' }" class="text--light-colored"
              >Browse Questions</router-link
            >
          </li>
          <li class="nav__item">
            <router-link :to="{ name: 'session' }" class="text--light-colored"
              >Resume Session</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <RouterView />
</template>
<script>
export default {
  data() {
    return {
      hamburgerMenuIsOpen: false
    }
  },

  computed: {},

  methods: {}
}
</script>
<style>
.wrapper {
  position: relative;
  right: 50%;
  bottom: 50%;
}
</style>
