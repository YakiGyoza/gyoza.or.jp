<template>
  <section class="area-common -contact">
  <div class="wrap">
  <h2 class="headline -contact">お問い合わせ</h2>

  <ul class="list-contact">
    <li>
      <a href="https://share.hsforms.com/1cLvRzx1iTbCOdvDQF-N5fQ31zvo" target="_blank" class="-private">個人の方</a>
    </li>
    <li>
      <a href="https://share.hsforms.com/1ohpGfLTRSnOaUqGMxMUwcQ31zvo" target="_blank" class="-corporate">法人・店舗の方</a>
    </li>
  </ul>

  </div>
  </section><!-- /.area-common -->
</template>

<style lang="scss" scoped>
.list-contact {
	display: flex;
	justify-content: space-between;
	max-width: 680px;
	margin-right: auto;
	margin-left: auto;

	li {
		flex-basis: calc(320 / 680 * 100%);

		a {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 210px;
			border-radius: 4px;
			color: #fff;
			font-size: 2.4rem;
			font-weight: bold;
			text-align: center;
			&::before {
				content: "";
				height: 81px;
				margin-bottom: 20px;
				background-repeat: no-repeat;
				background-size: contain;
			}

			&:hover {
				text-decoration: none;

				&.-private {
					background-color: lighten($color_private, 5%);
				}
				&.-corporate {
					background-color: lighten($color_corporate, 5%);;
				}
			}

			&.-private {
				background-color: $color_private;
				&::before {
					width: 71px;
					background-image: url(/assets/img/top/contact_img_01.png);
				}
			}
			&.-corporate {
				background-color: $color_corporate;
				&::before {
					width: 156px;
					background-image: url(/assets/img/top/contact_img_02.png);
				}
			}
		}
	}

	@media only screen and (max-width: $point_sp) {
		display: block;
		max-width: none;

		li {

			&:not(:first-child) {
				margin-top: calc(40 / #{$base_number_sp} * 100vw);
			}

			a {
				height: calc(314 / #{$base_number_sp} * 100vw);
				border-radius: calc(8 / #{$base_number_sp} * 100vw);
				font-size: calc(36 / #{$base_number_sp} * 100vw);
				&::before {
					height: calc(122 / #{$base_number_sp} * 100vw);
					margin-bottom: calc(35 / #{$base_number_sp} * 100vw);
				}

				&.-private {
					&::before {
						width: calc(107 / #{$base_number_sp} * 100vw);
						background-image: url(/assets/img/top/contact_img_01.png);
					}
				}
				&.-corporate {
					&::before {
						width: calc(234 / #{$base_number_sp} * 100vw);
					}
				}
			}
		}
	}
}
</style>
