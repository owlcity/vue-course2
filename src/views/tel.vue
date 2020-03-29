<template>
  <div>
    电话:16666666666

    <h3>{{message}}</h3>
  </div>

</template>
<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', (msg) => {
      console.log(this)
      this.message = msg
    })
  }
}
</script>
