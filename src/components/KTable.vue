<template>
    <div class="table-wrapper">
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
                <tr v-for="(item, index) in tableData" :key="index">
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
    </div>
</template>

<script>
export default {
    props: {
        tableData: {
            type: Array
        }
    }
}
</script>