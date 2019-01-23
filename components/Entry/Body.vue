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
.body {
  background: #fff;
  padding: 1em;
}
.body /deep/ p {
  font-size: 1.6rem;
  padding: 1em 0;
}
.body /deep/ a {
  color: #600;
}
.body /deep/ ul {
  margin-left: 2em;
}
.body /deep/ li {
  list-style: disc;
}
</style>
