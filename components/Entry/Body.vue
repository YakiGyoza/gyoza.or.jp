<template>
  <article>
    <div class="body" v-html="$md.render(body)"></div>
  </article>
</template>

<script>
export default {
  props: {
    body: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.body /deep/ p {
  font-size: 1.6rem;
  padding: 1em 0;
}
</style>
