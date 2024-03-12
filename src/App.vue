<template>
  <header>
    <div class="wrapper">
      <nav class="hamburger-menu">
        <span class="hamburger-menu__icon"></span>
        <span class="hamburger-menu__icon"></span>
        <span class="hamburger-menu__icon"></span>
      </nav>
      <h1 class="">Quizbox</h1>
    </div>
    <nav class="page-header__menu--secondary" :class="{ visible: showNav, hidden: !showNav }">
      <div class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link
              :to="{ name: 'quizbox' }"
              class="text--light-colored"
              @click="oncollapseMenu"
              >Play Quizbox</router-link
            >
          </li>
          <li class="nav__item">
            <router-link
              :to="{ name: 'questions' }"
              class="text--light-colored"
              @click="oncollapseMenu"
              >Browse Questions</router-link
            >
          </li>
          <li class="nav__item" v-if="sessionActive">
            <router-link
              :to="{ name: 'session' }"
              class="text--light-colored"
              @click="oncollapseMenu"
              >Resume Session</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <RouterView />
</template>
