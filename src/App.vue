<template>
  <div id="app">
    <nav-bar />
    <div class="container">
        <router-view/>
    </div>
    <footer>
        <small>&copy; Kangaroooo 2021.</small>
    </footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: { 
    NavBar
  }
}
</script>

