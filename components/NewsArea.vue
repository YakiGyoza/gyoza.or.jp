<template>
  <section id="news" class="area-common -news">
  <div class="wrap">
  <h2 class="headline -news"><span>お知らせ</span></h2>

  <div class="column-news-top">
  <div class="column-news-top__item">
  <a href="#">
  <div class="column-news-top__image"><img src="/assets/img/dummy/img_dummy.jpg" alt=""></div>
  <div class="column-news-top__contents">
  <dl>
  <dt>2018.07.14</dt>
  <dd>ごあいさつごあいさつごあいさつごあいさつ</dd>
  </dl>
  </div><!-- /.column-news-top__contents -->
  </a>
  </div><!-- /.column-news-top__item -->
  <div class="column-news-top__item">
  <a href="#">
  <div class="column-news-top__image"><img src="/assets/img/dummy/img_dummy.jpg" alt=""></div>
  <div class="column-news-top__contents">
  <dl>
  <dt>2018.07.14</dt>
  <dd>ごあいさつごあいさつごあいさつごあいさつ</dd>
  </dl>
  </div><!-- /.column-news-top__contents -->
  </a>
  </div><!-- /.column-news-top__item -->
  <div class="column-news-top__item">
  <a href="#">
  <div class="column-news-top__image"><img src="/assets/img/dummy/img_dummy.jpg" alt=""></div>
  <div class="column-news-top__contents">
  <dl>
  <dt>2018.07.14</dt>
  <dd>ごあいさつごあいさつごあいさつごあいさつ</dd>
  </dl>
  </div><!-- /.column-news-top__contents -->
  </a>
  </div><!-- /.column-news-top__item -->
  </div><!-- /.column-news-top -->

  <div class="area-common__btn"><a href="/news/" class="btn -default">お知らせをすべてみる</a></div>

  </div><!-- /.wrap -->
  </section><!-- /.area-common -->
</template>

<style lang="scss" scoped>
.column-news-top {
	$this: &;

	display: flex;
	flex-flow: wrap;
	margin-top: calc(-40 / #{$base_number} * 100%);
	margin-left: calc(-40 / #{$base_number} * 100%);

	&__item {
		position: relative;
		flex-basis: calc(270 / #{$base_number + 40} * 100%);
		margin-top: calc(40 / #{$base_number + 40} * 100%);
		margin-left: calc(40 / #{$base_number + 40} * 100%);

		a {
			display: block;

			&:hover {
				#{$this}__image {
					img {
						transform: scale(1.08);
					}
				}
			}
		}
	}

	&__image {
		overflow: hidden;
	}

	&__contents {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 15px 20px;
		background-color: rgba($color_main, .7);
		color: #fff;

		dd {
			margin-top: 5px;
			font-size: 1.6rem;
			font-weight: bold;
		}
	}

	@media only screen and (max-width: $point_sp) {
		display: block;
		margin-top: calc(60 / #{$base_number_sp} * 100vw);
		margin-left: 0;

		&__item {
			margin-top: calc(40 / #{$base_number_sp} * 100vw);
			margin-left: 0;
		}

		&__contents {
			padding: calc(30 / #{$base_number_sp} * 100vw) calc(30 / #{$base_number_sp} * 100vw) calc(20 / #{$base_number_sp} * 100vw);

			dt,
			dd {
				font-size: calc(28 / #{$base_number_sp} * 100vw);
			}
			dd {
				margin-top: calc(10 / #{$base_number_sp} * 100vw);
			}
		}
	}
}

</style>
