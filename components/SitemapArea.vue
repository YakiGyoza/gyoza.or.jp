<template>
  <section class="area-common -sitemap">
  <div class="wrap">
  <h2 class="headline -sitemap">サイトマップ</h2>

  <div class="column-sitemap">
  <!-- <div class="column-sitemap__item">
  <p class="column-sitemap__headline"><a href="#">焼き餃子協会について</a></p>
  <ul class="column-sitemap__list">
  <li><a href="#">焼き餃子協会とは</a></li>
  <li><a href="#">焼き餃子協会の理念</a></li>
  <li><a href="#">焼き餃子協会の概要</a></li>
  </ul>
  </div> --><!-- /.column-sitemap__item -->
  <div class="column-sitemap__item">
  <p class="column-sitemap__headline"><nuxt-link to="/posts">お知らせ</nuxt-link></p>
  <ul class="column-sitemap__list">
  <li><nuxt-link to="/posts">TOPIC</nuxt-link></li>
  <li><nuxt-link to="/posts">REPORT</nuxt-link></li>
  <li><nuxt-link to="/posts">MEDIA</nuxt-link></li>
  </ul><!-- /.column-sitemap__list -->
  </div><!-- /.column-sitemap__item -->
  <div class="column-sitemap__item">
  <p class="column-sitemap__headline"><nuxt-link to="/" v-scroll-to="'#entry'">入会案内</nuxt-link></p>
  <ul class="column-sitemap__list">
  <li><nuxt-link to="/#entry" v-smooth-scroll>会員特典</nuxt-link></li>
  <li><nuxt-link to="/#entryConditions" v-smooth-scroll>入会資格</nuxt-link></li>
  <li><nuxt-link to="/#entryBenefit" v-smooth-scroll>会員種別と特典について</nuxt-link></li>
  </ul><!-- /.column-sitemap__list -->
  </div><!-- /.column-sitemap__item -->
  <div class="column-sitemap__item">
  <p class="column-sitemap__headline"><nuxt-link to="#contact" v-smooth-scroll>お問い合わせ</nuxt-link></p>
  <ul class="column-sitemap__list">
  <li><a href="https://share.hsforms.com/1cLvRzx1iTbCOdvDQF-N5fQ31zvo" target="_blank">個人お問い合わせ</a></li>
  <li><a href="https://share.hsforms.com/1ohpGfLTRSnOaUqGMxMUwcQ31zvo" target="_blank">法人お問いあわせ</a></li>
  <li><a href="https://share.hsforms.com/1ohpGfLTRSnOaUqGMxMUwcQ31zvo" target="_blank">取材のお問い合わせ</a></li>
  </ul><!-- /.column-sitemap__list -->
  </div><!-- /.column-sitemap__item -->
  </div><!-- /.column-sitemap -->

  </div><!-- /.wrap -->
  </section><!-- /.area-common -->
</template>

<style lang="scss" scoped>
.column-sitemap {
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;

	&__item {
		flex: 1;
		padding-right: 10px;
	}

	&__headline {
		font-weight: bold;
		a {
			display: inline-block;
			position: relative;
			padding-left: 20px;
			&::before,
			&::after {
				content: "";
				position: absolute;
			}
			&::before {
				top: 5px;
				left: 0;
				width: 12px;
				height: 12px;
				border-radius: 12px;
				background-color: $color_accent;
			}
			&::after {
				top: 9px;
				left: 3px;
				width: 4px;
				height: 4px;
				border-top: 1px solid $color_sub;
				border-right: 1px solid $color_sub;
				transform: rotate(45deg);
			}
		}
	}

	&__list {
		margin-top: 10px;
		padding-left: calc(20px + 1em);
		li {
			&:not(:first-child) {
				margin-top: 10px;
			}
		}
	}

	@media only screen and (max-width: $point_sp) {
		display: block;

		&__item {
			padding-right: 0;
		}

		&__headline {
			border-top: 1px solid #c5b59e;
			border-bottom: 1px solid #c5b59e;
			a {
				display: flex;
				align-items: center;
				height: calc(80 / #{$base_number_sp} * 100vw);
				padding-right: calc(20 / #{$base_number_sp} * 100vw);
				padding-left: calc(56 / #{$base_number_sp} * 100vw);
				&::before,
				&::after {
					top: calc(50% + calc(2 / #{$base_number_sp} * 100vw));
				}
				&::before {
					left: calc(20 / #{$base_number_sp} * 100vw);
					width: calc(24 / #{$base_number_sp} * 100vw);
					height: calc(24 / #{$base_number_sp} * 100vw);
					border-radius: calc(24 / #{$base_number_sp} * 100vw);
					transform: translateY(-50%);
				}
				&::after {
					left: calc(26 / #{$base_number_sp} * 100vw);
					width: calc(8 / #{$base_number_sp} * 100vw);
					height: calc(8 / #{$base_number_sp} * 100vw);
					transform: translateY(-50%) rotate(45deg);
				}
			}
		}

		&__list {
			margin-top: 0;
			padding-left: 0;
			li {
				margin-bottom: -1px;
				border-bottom: 1px solid #c5b59e;

				&:not(:first-child) {
					margin-top: 0;
				}

				a {
					display: flex;
					align-items: center;
					height: calc(80 / #{$base_number_sp} * 100vw);
					padding-right: calc(20 / #{$base_number_sp} * 100vw);
					padding-left: calc(calc(56 / #{$base_number_sp} * 100vw) + 1em);
				}
			}
		}
	}
}
</style>
