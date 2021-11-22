<template>
  <preloader style="height: calc(100vh - 100px)" />
</template>

<script>
import Preloader from '../../../../components/ui/preloader/Preloader'

export default {
  name: 'settings',
  components: { Preloader },
  data() {
    return {
      loading: true
    }
  },
  mounted() { this.init() },
  methods: {
    init: function () {
    }
  }
}
</script>

<style scoped lang="scss">
.settings {
  height: calc(100vh - 100px);
}
</style>
