<template>
    <div class="container">
        <section class="intro">
            <h1>Welcome to <br>the <span class="highlight"><em>Circus</em></span> Show!</h1>
            <p>To begin choreographing the circus, fill in the form below for Kangaroo A and Kangaroo B. Each kangaroo requires a starting position (between 0 and 10,000) and a speed rate.</p>
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