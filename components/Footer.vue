<template>
  <footer class="footer">
    <div class="wrap">
      <div class="unit-footer">
        <div class="unit-footer__header">
          <h2 class="unit-footer__logo"><a href="/"><img src="/assets/img/common/logo.png" alt="" width="106" height="100"><p>一般社団法人<b>焼き餃子協会</b><span>Yaki Gyoza Association</span></p></a></h2>
          <p class="unit-footer__address">〒108-0074 東京都港区高輪2-16-4 STOCK<br>焼き餃子協会事務局（しかけ株式会社）</p>
          <p class="unit-footer__tel"><a href="tel:03-4405-5516‬">03-4405-5516‬</a></p>
        </div><!-- /.unit-footer__header -->
        <ul class="unit-footer__sns">
          <li>
            <div class="fb-page" data-href="https://www.facebook.com/YakiGyozaJapan" data-tabs="timeline" data-width="220px" data-height="340px" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
              <blockquote cite="https://www.facebook.com/YakiGyozaJapan" class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/YakiGyozaJapan">Facebook</a>
              </blockquote>
            </div>
          </li>
          <li>
            <a class="twitter-timeline" data-lang="en" data-width="220" data-height="340" href="https://twitter.com/YakiGyozaJapan?ref_src=twsrc%5Etfw">Tweets by YakiGyozaJapan</a>
            <script src="https://platform.twitter.com/widgets.js" charset="utf-8" async></script>
          </li>
        </ul><!-- /.unit-footer__sns -->
      </div><!-- /.unit-footer -->
    </div><!-- /.wrap -->
    <p class="copyright"><small>©2018 一般社団法人焼き餃子協会 <br class="display-sp">All Rights Reserved.</small></p>
  </footer><!-- /.footer -->
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: '/assets/js/fb-sdk.js', async: true }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
	padding-top: 60px;
	grid-area: footer;

	@media only screen and (max-width: $point_sp) {
		padding-top: calc(100 / #{$base_number_sp} * 100vw);
	}
}

/* unit-footer */
.unit-footer {
	display: flex;
	justify-content: space-between;
	position: relative;
	z-index: 3;
	padding-bottom: 60px;

	&::before {
		content: "";
		position: absolute;
		bottom: -25px;
		left: -132px;
		z-index: -1;
		width: 433px;
		height: 277px;
		background: url(/assets/img/common/bg_footer.png) no-repeat;
		background-size: contain;
	}

	&__header {
		flex: 1;
	}

	&__logo {
		font-size: 1.8rem;
		line-height: 1;

		a {
			display: flex;
			align-items: center;
			&:hover {
				text-decoration: none;
			}
		}

		b,
		span {
			display: block;
		}

		img {
			margin-right: 10px;
		}

		b {
			margin-top: 5px;
			font-size: 3rem;
			font-weight: bold;
		}

		span {
			margin-top: 5px;
			font-size: 1.5rem;
		}
	}

	&__address {
		margin-top: 40px;
	}

	&__tel {
		margin-top: 10px;
		font-size: 2.8rem;
		font-weight: bold;
		line-height: 1;
		a {
			pointer-events: none;
			&:hover {
				text-decoration: none;
			}
		}
	}

	&__sns {
		display: flex;
		margin-left: 40px;

		li {
			width: 220px;
			&:not(:first-child) {
				margin-left: 40px;
			}
		}
	}

	@media only screen and (max-width: $point_view) {
		flex-direction: column;
		align-items: center;
		padding-bottom: 120px;

		&::before {
			left: 50%;
			transform: translateX(-50%);
		}

		&__header {
			order: 2;
			margin-top: 50px;
		}
	}

	@media only screen and (max-width: $point_sp) {
		padding-bottom: calc(180 / #{$base_number_sp} * 100vw);

		&::before {
			bottom: calc(24 / #{$base_number_sp} * 100vw);
			width: calc(544 / #{$base_number_sp} * 100vw);
			height: calc(349 / #{$base_number_sp} * 100vw);
		}

		&__header {
			margin-top: calc(80 / #{$base_number_sp} * 100vw);
		}

		&__logo {
			font-size: calc(26 / #{$base_number_sp} * 100vw);

			img {
				margin-right: calc(10 / #{$base_number_sp} * 100vw);
			}

			b {
				margin-top: calc(6 / #{$base_number_sp} * 100vw);
				font-size: calc(48 / #{$base_number_sp} * 100vw);
			}

			span {
				margin-top: calc(6 / #{$base_number_sp} * 100vw);
				font-size: calc(22 / #{$base_number_sp} * 100vw);
			}
		}

		&__address {
			margin-top: calc(65 / #{$base_number_sp} * 100vw);
		}

		&__tel {
			margin-top: calc(15 / #{$base_number_sp} * 100vw);
			font-size: calc(44 / #{$base_number_sp} * 100vw);
			text-align: center;
			a {
				pointer-events: auto;
			}
		}

		&__sns {
			display: block;
			margin-left: 0;

			li {
				width: 100%;
				&:not(:first-child) {
					margin-top: calc(80 / #{$base_number_sp} * 100vw);
					margin-left: 0;
				}
			}
		}
	}
}


/* copyright */
.copyright {
	display: flex;
	align-items: center;
	height: 61px;
	padding: 5px 90px 5px 30px;
	border-top: 1px solid #c5b59e;

	@media only screen and (max-width: $point_sp) {
		height: calc(calc(100 / #{$base_number_sp} * 100vw) + 1px);
		padding: calc(10 / #{$base_number_sp} * 100vw) calc(110 / #{$base_number_sp} * 100vw) calc(10 / #{$base_number_sp} * 100vw) calc(30 / #{$base_number_sp} * 100vw);
		font-size: calc(20 / #{$base_number_sp} * 100vw);
	}
}
</style>
