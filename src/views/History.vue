<template>
    <div class="container">
        <div class="history">
            <template v-if="history.length === 0">
            <h4 class="text-green text-center">There are no kangaroo tests. <router-link to="/"><u>Get started</u></router-link>.</h4>
            </template>
            <template v-else>
                <k-table :table-data="history" />
                <div class="table-footer">
                    <router-link to="/"><u>Try another test</u></router-link>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
const KTable = () => import('@/components/KTable')
export default {
    name: "History",
    components: { KTable },
    computed: {
        history() {
            return this.$store.getters.history;
        }
    }
    
}
</script>