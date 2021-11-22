<template>
  <div class="hotfix-card" @click="setCurrentHotfix">
    <div class="hotfix-card__inner">
      <div class="hotfix-card__header">
        <div class="hotfix-card__number">
          <div class="hotfix-card__is-completed" v-if="true">
            <el-image
                src="/img/tick.svg"/>
          </div>
          <div class="hotfix-card__is-completed" v-else>
            <el-image
                src="/img/tick.svg"/>
          </div>
          # {{ index + 1 }}
        </div>
        <div class="hotfix-card__priority" :style="`background-color: ${priority}`"></div>
      </div>
      <div class="hotfix-card__separator"></div>
      <div class="hotfix-card__content">
        <div class="hotfix-card__date">
          {{ new Date(hotfix.created).toLocaleDateString() }}
        </div>
        <div class="hotfix-card__title">
          {{ hotfix.title }}
        </div>
        <div class="hotfix-card__version">
          <span>{{ currentVersion() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HotfixCard",
  props: {
    hotfix: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    // loading: {
    //   type: Boolean,
    //   required: true
    // },
    versions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      priority: '',
    }
  },
  methods: {
    setCurrentHotfix(){
      this.$store.commit('setCurrentHotfix', this.hotfix)
      this.$router.push(`${this.$route.path}?id=${this.hotfix._id}`).catch(() => {
      })
    },
    currentVersion(){
      if(this.versions.length && this.hotfix.versionId)
        return this.versions.find(version => version._id === this.hotfix.versionId).version
      else
        return '0'
    }
  },
  mounted() {
    switch (this.hotfix.priority) {
      case 4:
        this.priority = '#FF361F;'
        break;
      case 3:
        this.priority = '#FF7D1F;'
        break;
      case 2:
        this.priority = '#FFE500;'
        break;
      case 1:
        this.priority = '#2AD93B;'
        break;
    }
    // console.log(this.hotfix)
  }
}
</script>

<style scoped lang="scss">
.hotfix-card {
  width: calc(25vw - 50px);

  background: #F8F8F8;
  box-shadow: -5px -5px 10px rgba(240, 240, 240, 0.25), 5px 5px 10px #F0F0F0;
  border-radius: 16px;
  margin-right: 12px;
  margin-bottom: 12px;

  &:hover{
    cursor: pointer;
  }

  &:nth-child(5n) {
    margin-right: 0;
  }

  &__inner {
    padding: 16px 20px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__number {
    display: flex;
    font-family: Open Sans;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #575757;
  }

  &__is-completed {
    margin-right: 12px;

    > .el-image {
      vertical-align: bottom;
      height: 20px;
    }
  }

  &__priority {
    border-radius: 50%;
    height: 14px;
    width: 14px;
  }

  &__separator {
    width: 100%;
    //width: 305px;
    height: 1px;
    background: #FFFFFF;
    border-radius: 2px;
    transform: matrix(1, 0, 0, -1, 0, 0);
    margin: 10px 0;
  }

  &__content {

  }

  &__date {
    font-family: 'Open Sans', serif;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #575757;
    margin-bottom: 12px;
  }

  &__title {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    color: #0D0D0D;
    margin-bottom: 14px;
  }

  &__version {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #0D0D0D;
  }
}

</style>
