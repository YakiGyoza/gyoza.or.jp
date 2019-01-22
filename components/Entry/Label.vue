<template>
  <div>
    <div class="label" v-for="(type, key, index) in types" :key="index">{{ type }}</div>
  </div>
</template>

<script>
export default {
  props: {
    types: {
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
.label {
  display: inline-block;
  padding: 2px 12px 3px;
  background-color: #9e4620;
  color: #fff;
  font-size: 1.2rem;
}
</style>
