<template>
  <!-- <div>{{this.$route.params.name}}</div> -->
  <div>{{ name }}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'zk'
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to.name)
    console.log(from.name)
  },
  mounted () {
    // console.log(this)
  }
}
</script>

<style>
</style>
