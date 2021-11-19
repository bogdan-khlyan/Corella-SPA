<template>
  <div>
    <transition name="el-fade-in-linear">
      <div v-if="data" class="preloader" :style="`zoom: ${zoom}%`">
        <default v-if="type === 'default'" />
        <infinity v-else/>
      </div>
    </transition>
    <transition name="el-fade-in-linear">
      <div v-if="show">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
import Default from '@/components/ui/preloader/components/Default'
import Infinity from '@/components/ui/preloader/components/Infinity'

export default {
  name: 'avatar',
  components: { Default, Infinity },
  model: {
    prop: 'data',
    event: 'input'
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    zoom: {
      type: Number,
      default: 100
    },
    data: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    data () {
      console.log('asfasfasf')
      setTimeout(() => this.show = !this.show, 300)
    }
  },
  data () {
    return {
      show: !this.data
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.preloader {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-in-show {

}

</style>

