<template>
    <header>
        <nav class="nav">
            <div class="container">
                <div class="nav-content">
                    <div class="nav-logo">
                    <img src="@/assets/icons/logo.svg" alt="logo" />
                    <span>kangaroooo</span>
                </div>
                <div class="nav-list">
                    <router-link class="nav-item" to="/">Home</router-link>
                    <router-link class="nav-item" to="/history">History</router-link>
                </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "History"
}
</script>