<template>
  <div class="hotfixes">
    <div class="hotfixes__inner">
      <hotfix-card
          v-for="(hotfix,index) of hotfixes"
          :key="hotfix._id"
          :hotfix="hotfix"
          :index="index"
          :versions="[]" />
    </div>
    <hotfix-modal/>
  </div>
</template>

<script>
import HotfixCard from '@/views/project/components/hotfixes/HotfixCard'
import HotfixModal from '@/views/project/components/hotfixes/hotfixModal/HotfixModal'

export default {
  name: 'Index',
  components: {
    HotfixCard,
    HotfixModal
  },
  data() {
    return {
    }
  },
  computed: {
    hotfixes () {
      return this.$store.state.project.hotfixes
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init: function () {
      this.$api.project.hotfix.getHotfixes(this.$route.params.id)
    },
  },
}
</script>

<style scoped lang="scss">
.hotfixes {

  .hotfixes__inner {
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;

    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

}
</style>
