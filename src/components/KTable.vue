<template>
    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th class="sn">S/N</th>
                    <th>Date/Time</th>
                    <th>Values</th>
                    <th>Test Result</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                    <td class="sn">{{index + 1}}</td>
                    <td>{{item.date.toLocaleString()}}</td>
                    <td>{{item.fields}}</td>
                    <td>
                        <span class="table-status-label" :class="item.result.toLowerCase()">{{item.result}}</span>
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