<template>
  <div class="project-list">
    <div class="project-list__title">
      <h2>Projects</h2>
    </div>
    <transition name="el-fade-in-linear" mode="out-in">
      <empty-list v-if="projects.length === 0"/>
      <div v-else class="project-list__content">
        <transition-group name="el-fade-in-linear" >
          <project-card
              v-for="project in projects" :key="project.id"
              :project="project"/>
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
import ProjectCard from "@/app/projects/projectList/components/ProjectCard";
import EmptyList from "@/app/projects/projectList/components/EmptyList";
import {projectsState} from "@/app/projects/projects.state";
import {projectsController} from "@/app/projects/projects.controller";
import {baseHeaderState} from "@/app/common/baseWrapper/baseHeader/base-header.state";

export default {
  name: 'project-list',
  components: {
    ProjectCard,
    EmptyList
  },
  computed: {
    searchInput() {
      return baseHeaderState.searchValue
    },
    projects() {
      if (this.searchInput === '') {
        return projectsState.projects
      } else {
        return projectsState.projects.filter(project => project.name.toLowerCase().indexOf(this.searchInput) !== -1)
      }
    }
  },
  created() {
    projectsController.getProjects()
  },
  beforeUnmount() {
    baseHeaderState.searchValue = ''
  }
}
</script>

<style scoped lang="scss">
.project-list {

  &__title {
    > h2 {
      width: max-content;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;

      text-align: center;
      text-transform: capitalize;

      color: #3B3B3B;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 24px;

    padding-top: 12px;

    @media screen and (max-width: 1800px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 2.5vw;
    }
    @media screen and (max-width: 1700px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 24px;
    }
    @media screen and (max-width: 1500px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 24px;
    }
    @media screen and (max-width: 980px) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 24px;
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: 1fr;
      grid-column-gap: 24px;
    }

  }

}
</style>
