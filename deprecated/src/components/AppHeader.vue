<template>
  <header class="app-header">
    <div class="header d-flex">
      <div v-if="!projectName" class="search d-flex">
        <div class="search__icon d-flex">
          <el-image
              src="/img/loupe.svg"
              class="search__icon-img"
          ></el-image>
        </div>
        <div class="search__input-wrapper">
          <el-input placeholder="Search" class="input-no-border" v-model="search"/>
        </div>
      </div>
      <div class="desk">{{ projectName }}</div>
      <div class="account">
<!--        <div class="notification">-->
<!--          <div class="notification__bell">-->
<!--            <el-image-->
<!--                src="/img/bell.svg"-->
<!--                class="notification__bell-img"-->
<!--            ></el-image>-->
<!--            <div class="notification__count">-->
<!--              {{ this.notifyCount }}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <div class="profile d-flex">
          <avatar style="margin-top: 7px" hash="asfasglkq37rhiufnei4t2hf93t2t3t4543" />
<!--          <el-image-->
<!--              src="/img/user.svg"-->
<!--          ></el-image>-->
        </div>
        <div class="welcome">
          superadmin2021
<!--          {{ this.username }}-->
        </div>
      </div>
    </div>
    <i class="line"></i>
  </header>
</template>

<script>
import Avatar from './ui/Avatar'

export default {
  name: 'app-header',
  components: { Avatar },
  props: {
    search: {
      type: String
    }
  },
  computed: {
    projectName() {
      if (this.$route.name === 'board' && this.$store.state.project.currentProject) {
        return this.$store.state.project.currentProject.name
      } else return ''
    },
    username() {
      return this.$store.state.user.username
    }
  },
  data() {
    return {
      notifyCount: 3,
    }
  },
  mounted() {
  },
  methods: {
    setName(desk) {
      console.log(desk)
    }
  },
}
</script>

<style scoped lang="scss">
@import '../assets/scss/variables';

.app-header {
  position: relative;
  background-color: #FFFFFF;
  width: calc(100vw - 70px - #{$sidebar-width});
  z-index: 99;

  > .line {
    margin-top: 10px;
    display: block;
    width: 100%;
    height: 1px;

    background: #C4C4C4;
    border-radius: 2px;
  }

}


.header {
  justify-content: space-between;
}

.search {
  padding-top: 20px;
}

.search__input-wrapper {
  max-width: 300px;
}

.desk {
  padding-top: 6px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Rubik,sans-serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
}

.account {
  display: flex;
  align-items: center;
}

.notification__bell {
  position: relative;
  width: 34px;
  height: 28px;
  margin-right: 40px;
}

.notification__bell-img {
  position: absolute;
  bottom: 0;
  left: 0;
}

.notification__count {
  position: absolute;
  top: 0;
  right: 0;
  width: 18px;
  height: 18px;
  background-color: #1B855F;
  color: white;
  text-align: center;
  font-size: 10px;
  line-height: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.profile {
  margin-right: 25px;
}

.welcome {
  font-size: 14px;
  line-height: 16px;
}
</style>
