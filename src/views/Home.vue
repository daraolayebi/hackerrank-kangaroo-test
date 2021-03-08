<template>
    <div class="container">
        <section class="intro">
            <h1>Welcome to <br>the <span class="highlight"><em>Circus</em></span> Show!</h1>
            <p>To begin choreographing the circus, fill in the form by entering a starting position and a speed rate for Kangaroo A and Kangaroo B.</p>
        </section>
        <section>
            <k-form />
        </section>
    </div>
</template>

<script>
const KForm = () => import('@/components/KForm')
export default {
    name: "Home",
    components: { KForm }
}
</script>