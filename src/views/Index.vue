<template>
    <div>
        <app-header />
        <main class="main">
            <router-view/>
        </main>
        <footer>
            <small>&copy; kangaroooo 2021.</small>
        </footer>
    </div>
</template>

<script>
import '../assets/scss/app.scss';
const AppHeader = () => import('@/components/AppHeader')
export default {
  name: 'Index',
  components: { AppHeader }
}
</script>


<style lang="scss">
</style>

