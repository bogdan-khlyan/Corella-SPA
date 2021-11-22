<template>
  <div class="sidebar" :class="{'sidebar__no-hover': !hover}">
    <div class="project-list-sidebar">
      <router-link class="sidebar__logo" to="/">
        <img src="/img/corella_icon_mini.svg" class="logo"/>
        <span>Corella</span>
      </router-link>

      <div class="sidebar__buttons">
        <div class="opened-project" v-if="this.$route.params.id">
          <router-link
              :to="`/projects/${this.$route.params.id}/board`"
              class="text-center project-img"
              :class="{'text-center__active': this.$route.name === 'project-by-id'}">
            <el-image src="/img/white-board.svg"/>
            <div class="sidebar__item-description">
              Board
            </div>
          </router-link>
          <router-link :to="`/projects/${this.$route.params.id}/settings`"
                       :class="{'text-center__active': this.$route.name === 'settings'}"
                       class="text-center project-img">
            <el-image src="/img/settings.svg"/>
            <div class="sidebar__item-description">
              Settings
            </div>
          </router-link>
          <router-link
              :to="`/projects/${this.$route.params.id}/hotfixes`"
              :class="'text-center project-img '+( this.$route.name === 'hotfixes' ? 'text-center__active' : '' )">
            <el-image
                src="/img/fire.svg"/>
            <div class="sidebar__item-description">
              Hot-fix
            </div>
          </router-link>
          <div class="sidebar__separator" style="margin-bottom: 14px;"/>
        </div>
        <div class="add-project text-center project-img" @click="addProject" v-if="route === '/'">
          <el-image
              src="/img/add_project.svg"/>
          <div class="sidebar__item-description">
            Add project
          </div>
        </div>
        <div class="add-project text-center project-img" @click="addHotfix" v-else-if="route.match('hotfixes')">
          <el-image
              src="/img/add_project.svg"/>
          <div class="sidebar__item-description">
            Add hot-fix
          </div>
        </div>
        <router-link
            :to="`?issue=0`"
            :class="'text-center project-img '+( this.$route.name === 'hotfixes' ? 'text-center__active' : '' )">
          <el-image
              src="/img/add_project.svg"/>
          <div class="sidebar__item-description">
            Add issue
          </div>
        </router-link>
        <!--      <div class="add-project text-center project-img" @click="addIssue" v-else-if="route.match('projects')">-->
        <!--        -->
        <!--      <el-image-->
        <!--          src="/img/add_project.svg"/>-->
        <!--      <div class="sidebar__item-description">-->
        <!--        Add issue-->
        <!--      </div>-->
        <!--      </div>-->
        <div class="admin-sidebar" v-if="admin">
          <div class="sidebar__separator" style="margin-bottom: 14px;"/>
          <router-link class="text-center user" to="/admin/user-management">
            <el-image
                src="/img/user_managament.svg"
                class="project-img"/>
            <div class="sidebar__item-description">
              User management
            </div>
          </router-link>
          <div class="text-center">
            <el-image
                src="/img/config.svg"
                class="project-img"/>
            <div class="sidebar__item-description">
              Config
            </div>
          </div>
        </div>
      </div>


    </div>
    <div class="project-list-sidebar-footer">
<!--      <div class="text-center notify-icon">-->
<!--        <el-image-->
<!--            src="/img/notification.svg"-->
<!--            class="project-img"/>-->
<!--        <div class="sidebar__item-description">-->
<!--          Notification-->
<!--        </div>-->
<!--      </div>-->
      <div class="sidebar__separator"/>
      <el-popconfirm title="Are you sure that you want to log out?"
                     cancel-button-text="Cancel"
                     confirm-button-text="Yes"
                     @confirm="logout">
        <div class="text-center logout-icon" slot="reference">
          <el-image
              src="/img/logout.svg"
              class="project-img"/>
          <div class="sidebar__item-description">
            Log out
          </div>
        </div>
      </el-popconfirm>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  computed: {
    admin() {
      return this.$store.state.user.isAdmin
    },
    route() {
      return this.$route.path;
    }
  },
  data () {
    return {
      hover: false
    }
  },
  methods: {
    logout() {
      if (this.$store.state.user.loggedIn) {
        this.$api.user.logout()
        this.$router.push('/login')
      }
    },
    addHotfix(){},
    addIssue(){},
    addProject(){}
  },
}
</script>

<style lang="scss">
@import '../assets/scss/variables';
.sidebar__buttons .router-link-active {
  background-color: #0D0D0D;
}

.sidebar {
  height: 100vh;
  width: $sidebar-width;
  background: linear-gradient(180deg, #20C560 0%, #04A481 100%);
  box-shadow: 3px 0 7px rgba(14, 56, 41, 0.26);
  border-radius: 0 16px 16px 0;
  position: fixed;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width ease-in 0.18s;


  &:hover {
    width: 260px;

    .sidebar__logo > span {
      opacity: 1;
    }
  }

}

.sidebar__no-hover {
  width: $sidebar-width;
  max-width: $sidebar-width;
  &:hover {
    width: $sidebar-width;
    max-width: $sidebar-width;

    .sidebar__logo > span {
      //opacity: 1;
      display: none;
    }


    .sidebar__separator {
      width: calc(#{$sidebar-width} - 30px)!important;
      max-width: calc(#{$sidebar-width} - 30px)!important;
    }

    .sidebar__item-description {
      display: none!important;
    }

  }
}

.sidebar:hover .sidebar__separator {
  max-width: 230px;
}

.sidebar:hover .sidebar__item-description {
  display: block;
  cursor: pointer;
}

.sidebar__logo {
  display: flex;
  align-items: center;
  padding: 10px 20px 55px 20px;
  text-decoration: none;

  > img {
    min-width: 40px;
    min-height: 46px;
    object-fit: contain;
  }

  > span {
    padding-top: 10px;
    padding-left: 22px;

    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    text-align: center;

    color: #1B1A18;

    text-decoration: none;
    transition: 0.15s 0.1s;

    opacity: 0;
  }

}

.text-center {
  margin: 0 16px 20px 16px;
  display: flex;
  align-items: center;
  padding: 12px;

  border-radius: 16px;

  transition: 0.3s;

  &:hover {
    background: #1B1A18;
    cursor: pointer;
  }
}

.text-center__active {
  background: #1B1A18;
  cursor: pointer;
}

.project-list-sidebar .add-project {
  margin-bottom: 14px;
}


.sidebar__item-description {
  width: 0;
  position: absolute;
  overflow: hidden;
  left: 50px;
  margin-left: 30px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
  color: #FFFFFF;
  opacity: 0;
  transition: opacity ease-in 0.2s;
}

.sidebar:hover .sidebar__item-description {
  width: 100%;
  opacity: 1;
}

.sidebar__separator {
  max-width: 50px;
  border-radius: 2px;
  height: 1px;
  background-color: #fff;
  margin-left: 15px;
  transition: all ease-in 0.1s;
}

.logout-icon {
  margin-bottom: 15px;
  margin-top: 25px;
}
</style>
