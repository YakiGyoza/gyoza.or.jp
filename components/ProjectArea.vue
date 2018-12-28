<template>
  <section id="project" class="area-common -project">
  <div class="wrap">
  <h2 class="headline -project"><span>プロジェクト</span></h2>

  <div class="column-project">
  <div class="column-project__item">
  <a href="#">
  <div class="column-project__image"><img src="/assets/img/dummy/img_dummy.jpg" alt=""></div>
  <div class="column-project__contents">
  <p class="column-project__label">イベント</p>
  <p class="column-project__date">2015.04.18</p>
  <h3 class="column-project__headline">「焼き餃子コレクション2015」がはじまりました</h3>
  <div class="column-project__text">
  <p>大盛況だった「KANSAIかき氷コレクション2014」から一年。2015年4月1…</p>
  </div><!-- /.column-project__text -->
  </div><!-- /.column-project__contents -->
  </a>
  </div><!-- /.column-project__item -->
  <div class="column-project__item">
  <a href="#">
  <div class="column-project__image"><img src="/assets/img/dummy/img_dummy.jpg" alt=""></div>
  <div class="column-project__contents">
  <p class="column-project__label">イベント</p>
  <p class="column-project__date">2015.04.18</p>
  <h3 class="column-project__headline">「焼き餃子コレクション2015」がはじまりました</h3>
  <div class="column-project__text">
  <p>大盛況だった「KANSAIかき氷コレクション2014」から一年。2015年4月1…</p>
  </div><!-- /.column-project__text -->
  </div><!-- /.column-project__contents -->
  </a>
  </div><!-- /.column-project__item -->
  <div class="column-project__item">
  <a href="#">
  <div class="column-project__image"><img src="/assets/img/dummy/img_dummy.jpg" alt=""></div>
  <div class="column-project__contents">
  <p class="column-project__label">イベント</p>
  <p class="column-project__date">2015.04.18</p>
  <h3 class="column-project__headline">「焼き餃子コレクション2015」がはじまりました</h3>
  </div><!-- /.column-project__contents -->
  </a>
  </div><!-- /.column-project__item -->
  <div class="column-project__item">
  <a href="#">
  <div class="column-project__image"><img src="/assets/img/dummy/img_dummy.jpg" alt=""></div>
  <div class="column-project__contents">
  <p class="column-project__label">イベント</p>
  <p class="column-project__date">2015.04.18</p>
  <h3 class="column-project__headline">「焼き餃子コレクション2015」がはじまりました</h3>
  </div><!-- /.column-project__contents -->
  </a>
  </div><!-- /.column-project__item -->
  <div class="column-project__item">
  <a href="#">
  <div class="column-project__image"><img src="/assets/img/dummy/img_dummy.jpg" alt=""></div>
  <div class="column-project__contents">
  <p class="column-project__label">イベント</p>
  <p class="column-project__date">2015.04.18</p>
  <h3 class="column-project__headline">「焼き餃子コレクション2015」がはじまりました</h3>
  </div><!-- /.column-project__contents -->
  </a>
  </div><!-- /.column-project__item -->
  </div><!-- /.column-project -->

  <!-- <div class="area-common__btn"><a href="#" class="btn -default">過去のプロジェクトをすべてみる</a></div> -->

  </div><!-- /.wrap -->
  </section><!-- /.area-common -->
</template>

<style lang="scss" scoped>
.column-project {
	$this: &;

	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
	max-width: $base_width - 60px;
	margin-right: auto;
	margin-left: auto;
	margin-top: -5px;

	&__item {
		flex-basis: 100%;
		margin-top: 30px;
		background-color: #fff;
		> a {
			display: flex;
			align-items: center;
			&:hover {
				text-decoration: none;

				#{$this}__image {
					> img {
						transform: scale(1.05);
					}
				}

				#{$this}__headline,
				#{$this}__date,
				#{$this}__text {
					color: $color_accent;
				}
			}
		}

		&:not(:nth-child(n+3)) {
			flex-basis: calc(400 / #{$base_number - 50} * 100%);
			> a {
				display: block;
			}

			#{$this}__image {
				height: 200px;
				> img {
					position: absolute;
					top: 50%;
					left: 50%;
					width: auto;
					height: auto;
					min-width: 100%;
					min-height: 100%;
					-webkit-transform: translate(-50%, -50%);
					transform: translate(-50%, -50%);
				}
				@supports (object-fit: cover) {
					> img {
						position: static;
						top: auto;
						left: auto;
						width: 100%;
						height: 100%;
						object-fit: cover;
						-webkit-transform: none;
						transform: none;
					}
				}
			}

			#{$this}__contents {
				padding: 22px 30px;
			}

			#{$this}__label {
				padding-top: 1px;
				padding-bottom: 2px;
				font-size: 1.4rem;
				font-weight: bold;
			}

			#{$this}__date {
				font-size: 1.6rem;
				font-weight: bold;
			}

			#{$this}__headline {
				font-size: 1.8rem;
			}
		}
	}

	&__image {
		overflow: hidden;
		flex-basis: 100px;
		height: 100px;
	}

	&__contents {
		flex: 1;
		padding: 5px 20px;
	}

	&__label,
	&__date {
		display: inline-block;
	}

	&__label {
		padding: 2px 12px 3px;
		background-color: #9e4620;
		color: #fff;
		font-size: 1.2rem;
	}

	&__date {
		margin-left: 15px;
	}

	&__headline {
		margin-top: 10px;
		font-weight: bold;
	}

	&__text {
		margin-top: 10px;
		font-size: 1.6rem;
	}

	@media only screen and (max-width: $point_sp) {
		max-width: none;
		margin-top: calc(-40 / #{$base_number_sp} * 100vw);

		&__item {
			margin-top: calc(40 / #{$base_number_sp} * 100vw);

			&:not(:nth-child(n+3)) {
				flex-basis: 100%;

				#{$this}__image {
					height: calc(280 / #{$base_number_sp} * 100vw);
				}

				#{$this}__contents {
					padding: calc(30 / #{$base_number_sp} * 100vw) calc(55 / #{$base_number_sp} * 100vw);
				}

				#{$this}__date {
					font-size: calc(24 / #{$base_number_sp} * 100vw);
				}

				#{$this}__headline {
					font-size: calc(28 / #{$base_number_sp} * 100vw);
				}
			}
		}

		&__image {
			flex-basis: calc(200 / #{$base_number_sp} * 100vw);
			height: calc(200 / #{$base_number_sp} * 100vw);
		}

		&__contents {
			padding: calc(10 / #{$base_number_sp} * 100vw) calc(30 / #{$base_number_sp} * 100vw);
		}

		&__label {
			padding: calc(6 / #{$base_number_sp} * 100vw) calc(16 / #{$base_number_sp} * 100vw);
			font-size: calc(20 / #{$base_number_sp} * 100vw);
		}

		&__date {
			margin-left: calc(10 / #{$base_number_sp} * 100vw);
		}

		&__headline {
			margin-top: calc(15 / #{$base_number_sp} * 100vw);
		}

		&__text {
			margin-top: calc(10 / #{$base_number_sp} * 100vw);
			font-size: calc(24 / #{$base_number_sp} * 100vw);
		}
	}
}
</style>
