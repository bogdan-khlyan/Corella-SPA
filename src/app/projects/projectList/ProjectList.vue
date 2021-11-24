<template>
  <div class="project-list">
    <div class="project-list__title">
      <h2>Projects</h2>
    </div>
    <div class="project-list__content">
      <project-card
          v-for="project in projects" :key="project.id"
          :project="project"/>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/app/projects/projectList/ProjectCard";
import {projectsState} from "@/app/projects/projects.state";
import {projectsController} from "@/app/projects/projects.controller";

export default {
  name: 'project-list',
  components: {
    ProjectCard
  },
  computed: {
    projects() {
      return projectsState.projects
    }
  },
  created() {
    projectsController.getProjects()
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

  }

}
</style>
