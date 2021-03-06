<template>
    <main class="main">
        <template v-if="history.length === 0">
           <h4 class="text-green">There have been no tests yet. <router-link to="/"><u>Get started</u></router-link>.</h4>
        </template>
        <template v-else>
            <table>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Date/Time</th>
                        <th>Fields</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in history" :key="index">
                        <td>{{index + 1}}</td>
                        <td>{{item.date.toLocaleString()}}</td>
                        <td>{{item.fields}}</td>
                        <td>
                            <span class="table-status-label positive" v-if="item.result == 'YES'">{{item.result}}</span>
                            <span class="table-status-label negative" v-if="item.result == 'NO'">{{item.result}}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="table-footer">
                <router-link to="/"><u>Try another test</u></router-link>
            </div>
        </template>
    </main>
</template>

<script>
export default {
    name: "History",
    computed: {
        history() {
            return this.$store.getters.history;
        }
    }
    
}
</script>