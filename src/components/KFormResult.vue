<template>
    <modal name="form-result" :width="400" :minWidth="400" :clickToClose="false">
        <div class="modal-body">
            <h2>{{result}}!</h2>
            <span v-if="result == 'YES'">The kangaroos landed on the same spot! :)</span>
            <span v-else>Oops! The kangaroos are not together :(</span>
            <button type="button" class="button" @click="$emit('reset-form')">Test Again</button>
        </div>
    </modal>
</template>

<script>
export default {
    props: {
        result: {
            type: String
        }
    }
}
</script>

<style lang="css">
    .vm--overlay {
        background: rgba(0, 0, 0, .52)!important;
    }
    .modal-body {
        text-align: center;
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 300px;
    }
</style>