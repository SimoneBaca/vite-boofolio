<script>
export default {
  name: "ProjectsList",
};
</script>
<template>
  <div>
    <div class="jumbotron jumbotron-fluid py-5">
      <div class="container">
        <h1 class="display-3">All My Projects</h1>
        <p class="lead">lista dei repo lorem ipsum sin dolor</p>
        <hr class="my-2" />
        <p class="lead">
          Visit my profile. =>
          <a class="btn btn-danger" href="https://github.com/SimoneBaca" role="button"
            >GitHub</a
          >
        </p>
      </div>
    </div>

    <Projectlist />
  </div>
</template>

<style lang="scss" scoped></style>
