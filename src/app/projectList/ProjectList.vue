<template>
  <div class="project-list">
    <div class="project-list__title">
      <h2>Projects</h2>
    </div>
    <div class="project-list__content">
      <project-card/>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/app/projectList/ProjectCard";

export default {
  name: 'project-list',
  components: {
    ProjectCard
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

}
</style>
