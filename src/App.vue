<template>
  <div id="app">
    <NavBar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>