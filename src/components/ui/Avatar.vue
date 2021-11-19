<template>
  <div ref="avatar"></div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    hash: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  mounted() {
    this.generateAvatar()
  },
  methods: {
    generateAvatar: function () {
      const jdenticon = require('jdenticon')
      this.$refs.avatar.innerHTML = jdenticon.toSvg(this.hash, 40)
    }
  }
}
</script>

<style scoped>

</style>
