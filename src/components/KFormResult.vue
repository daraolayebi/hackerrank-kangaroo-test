<template>
    <modal name="form-result" :width="400" :minWidth="400" :clickToClose="false">
        <div class="modal-body">
            <h2>{{result}}!</h2>
            <span v-if="result == 'YES'">Kangaroos landed on the same spot! :)</span>
            <small v-else>Oops! Kangaroos are not in the same spot :(</small>
            <div class="kangaroo-icons" :class="{ 'separated' : result == 'NO' }">
                <img src="@/assets/icons/logo.svg" class="kangaroo" width="40">
                <img src="@/assets/icons/logo.svg" class="kangaroo" width="40">
            </div>
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