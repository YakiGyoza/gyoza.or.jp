<template>
  <section>
    <div class="visual-main">
      <div class="wrap">
        <div class="contents">
          <h1>{{ title }}</h1>
          <div class="description"><p>{{ description }}</p></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
    },
    publishDate: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.visual-main {
	background: #a32a00 url(/assets/img/common/visual-main_bg@pc.png) center center no-repeat;
	background-size: cover;
	color: #fff;
	text-align: center;
}

.contents {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  min-height: 181px;
  @include mq() {
    height: calc(180 / #{$base_number_sp} * 100vw);
  }
}

h1 {
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  @media only screen and (max-width: $point_sp) {
    font-size: calc(40 / #{$base_number_sp} * 100vw);
  }
}
</style>
