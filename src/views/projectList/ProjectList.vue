<template>
  <div class="projects-list">
    <div class="project-exist">
      <div class="projects-text">
        Projects
      </div>
      <div class="projects-wrapper">
        <router-link :to="`/projects/${project._id}/board`" v-for="project of this.projects" :key="projects.id">
          <ProjectCard :project="project"/>
        </router-link>
      </div>
      <div v-if="loading" v-loading="loading" style="height: calc(100vh - 80px)"></div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/views/projectList/components/ProjectCard'

export default {
  name: 'ProjectList',
  components: {
    ProjectCard
  },
  props: {
    search: {
      type: String
    }
  },
  computed: {
    projects() {
      if (this.search) {
        return this.$store.state.project.projectList.filter(
            item => item.name.toLowerCase().match(this.search.toLowerCase())
        )
      }
      return this.$store.state.project.projectList
    },
    isAuth() {
      return this.$store.state.user.loggedIn
    }
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    this.$api.project.getProjects().finally(() => this.loading = false)
    if (!this.isAuth) { // TODO
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">

.projects-wrapper {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  > a {
    flex: 1 1 18%;
    max-width: 18.6%;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    @media screen and (max-width: 1800px) { max-width: 18.4% }
    @media screen and (max-width: 1650px) { max-width: 18.2% }
    @media screen and (max-width: 1650px) {
      flex: 1 1 25%;
      max-width: 23%;
    }
    @media screen and (max-width: 1400px) { max-width: 22.8% }
  }
}

.projects-text {
  margin: 25px 0;

  font-family: Rubik,sans-serif;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-transform: capitalize;
  color: #3B3B3B;
}

a {
  margin: 12.5px;
  //margin-right: 25px;
  //margin-bottom: 25px;
  text-decoration: none;
}

a:last-child {
  margin-right: 0;
}
</style>