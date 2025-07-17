<script setup lang="ts"></script>

<template>
  <div class="app">
    <header>
      <div class="container">
        <div class="content">
          <ul>
            <li><RouterLink to="/">TODO</RouterLink></li>
            <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
          </ul>
        </div>
      </div>
    </header>
    <main><RouterView></RouterView></main>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  padding: 0;
  margin: 0;
}
header {
  width: 100%;
  background-color: #693f18;
}

.container {
  width: 1044px;
  margin: 0 auto;
}
.content {
  width: 100%;
  padding: 20px 0;
}
ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
li a {
  color: #fff;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
