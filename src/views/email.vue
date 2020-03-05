<template>
  <div>
    <p @click="handClick">
     邮箱:xxxxxx@qq.com
    </p>
  </div>
</template>

<script>
export default {
  mounted () {
    // console.log(this.$bus)
  },
  methods: {
    handClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  }
}
</script>
