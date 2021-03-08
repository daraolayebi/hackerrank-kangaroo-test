<template>
    <div>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="">Kangaroo A Position</label>
                <input type="number" id="positionA" name="positionA" v-model="x1" max="10000" placeholder="Enter Position A" required />
            </div>
            <div class="form-group">
                <label for="">Kangaroo A Speed (meters)</label>
                <input type="number" id="speedA" name="speedA" v-model="v1" min="1" max="10000" placeholder="Enter Speed A" required />
            </div>
            <div class="form-group">
                <label for="">Kangaroo B Position</label>
                <input type="number" id="positionB" name="positionB" v-model="x2" max="10000" placeholder="Enter Position B" required />
            </div>
            <div class="form-group">
                <label for="">Kangaroo B Speed (meters)</label>
                <input type="number" id="speedB" name="speedB" v-model="v2" min="1" max="10000" placeholder="Enter Speed B" required />
            </div>
            <div class="form-group">
                <button type="submit" class="button button-small" :disabled="!formIsComplete">Jump</button>
            </div>
        </form>
        <k-form-result :result="result" @reset-form="resetForm" />
    </div>
</template>

<script>
import kangaroo from '../kangaroo'
import KFormResult from './KFormResult'
export default {
  name: 'TestForm',
  components: { KFormResult },
  data () {
    return {
        x1: "",
        v1: "",
        x2: "",
        v2: "",
        result: ""
    }
  },
  computed:{
      formIsComplete() {
        if (this.x1 && this.v1 && this.x2 && this.v2) return true;
      }
  },
  methods: {
    submitForm() {
        this.result = kangaroo(this.x1, this.v1, this.x2, this.v2);
        this.$modal.show('form-result')
        this.$store.commit('SAVE_TEST', {
            date: new Date(),
            fields: `${this.x1}, ${this.v1}, ${this.x2}, ${this.v2}`,
            result: this.result
        })
    },
    resetForm() {
        this.result = "";
        this.x1 = "";
        this.v1 = "";
        this.x2 = "";
        this.v2 = "";
        this.$modal.hide('form-result')
    }
  }
}
</script>
