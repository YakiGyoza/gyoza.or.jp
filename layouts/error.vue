<template>
  <article class="contents">
    <section class="visual-main">
      <div class="wrap">
        <div class="visual-main__contents">
          <h1 class="visual-main__headline" v-if="error.statusCode === 404">ページが見つかりません</h1>
          <h1 class="visual-main__headline" v-else>エラーが発生しました</h1>
        </div>
      </div>
    </section>
    <div class="area-common">
      <div class="wrap">
        <nuxt-link to="/">ホーム</nuxt-link>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  props: ['error'],
}
</script>

<style lang="scss" scoped>
h1 {
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  @media only screen and (max-width: $point_sp) {
    font-size: calc(40 / #{$base_number_sp} * 100vw);
  }
}

.visual-main {
	background: #a32a00 url(/assets/img/common/visual-main_bg@pc.png) center center no-repeat;
	background-size: cover;
	color: #fff;
	text-align: center;

	&__contents {
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		justify-content: center;
		height: 200px;
    @include mq() {
      height: calc(180 / #{$base_number_sp} * 100vw);
    }
	}
}
</style>
