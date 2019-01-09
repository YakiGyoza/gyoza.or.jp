<template>
  <div class="image">
    <img class="heroImage" :src="loadImage" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: require('~/assets/img/dummy.jpg'),
    },
  },
  computed: {
    loadImage () {
      if( this.image ) {
        return this.image + '?w=1200';
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  position: relative;
  width: 100%;
  text-align: center;
}
.heroImage {
  object-fit: contain;
  font-family: 'object-fit: contain;';
  width: 100%;
  height: auto;
}
</style>
