<template>
    <div>
        <form @submit.prevent="kangaroo">
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
            <button type="submit" class="button" :disabled="loading">Jump</button>
        </form>
        <div class="test-result">
            <p class="result-pending" v-if="!result">The result will go here 
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </p>
            <template v-else>
                <h2>{{result}}!</h2>
                <span v-if="result == 'YES'">The kangaroos landed on the same spot! :)</span>
                <span v-else>Oops! The kangaroos are not together :(</span>
                <button type="button" class="button" @click="resetTest">Test Again</button>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TestForm',
  data () {
    return {
        x1: "",
        v1: "",
        x2: "",
        v2: "",
        maxNoOfJumps: 10000,
        result: "",
        loading: false
    }
  },
  methods: {
    kangaroo() {
        this.loading = true;
        let finalPositionA;
        let finalPositionB;
        for (let jump = 0; jump <= this.maxNoOfJumps; jump++) {
            finalPositionA = (+(this.x1) + +(this.v1)) * jump;
            finalPositionB = (+(this.x2) + +(this.v2)) * jump;
        
            console.log('finalPositionA', finalPositionA);
            console.log('finalPositionB', finalPositionB);

            (finalPositionA == finalPositionB) ? this.result = "YES" : this.result = "NO";

            // if (this.x1 > this.x2) {
            //     this.result = "NO"
            //     this.warning = true
            // }    
        }
        this.$store.commit('SAVE_TEST', {
            date: new Date(),
            fields: `${this.x1}, ${this.v1}, ${this.x2}, ${this.v2}`,
            result: this.result
        })
    },
    resetTest() {
        this.result = "";
        this.x1 = "";
        this.v1 = "";
        this.x2 = "";
        this.v2 = "";
    }
  },
  watch: {
    result(value) {
        if (value) this.loading = false
    }
  }
}
</script>
