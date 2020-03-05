<template>
  <div>
    <!-- 1:v-modle语法糖 -->
    <a-input v-model="stateValue"> </a-input>
    <!-- v-model语法糖可以理解为 1 -->
    <!-- <a-input :value="stateValue" @input="handleInput"></a-input> -->

    <h3>{{stateValue}}</h3>
  </div>
</template>
<script>
import AInput from '_c/Ainput.vue'
export default {
  name: 'store',
  components: {
    AInput
  },
  data () {
    return {
      stateValue: ''
    }
  },
  methods: {
    // <!-- v-model语法糖可以理解为 2 -->
    handleInput (value) {
      this.stateValue = value
    }
  }
}
</script>
