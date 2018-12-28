<template>
  <section class="visual-top">
    <div class="visual-top__contents">
      <h2 class="visual-top__headline">
        <img src="/assets/img/top/visual-top_h@pc.png" alt="美味しい焼き餃子を、家でもお店でも。">
        <img src="/assets/img/top/visual-top_h@sp.png" alt="">
      </h2>
      <p class="visual-top__text">焼き餃子協会は、美味しい餃子を<br>作る人と、美味しく焼く人、美味しく食べる人をつなげる団体です。</p>
      <ul class="visual-top__list">
        <li><a href="#about">焼き餃子協会について</a></li>
        <li><a href="#entry">入会案内</a></li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.visual-top {
	position: relative;
	height: 730px;
	background: url(/assets/img/top/visual-top_img@pc.jpg) center center no-repeat;
	background-size: cover;

	&::before {
		content: "";
		position: absolute;
		right: 30px;
		bottom: 30px;
		width: 57px;
		height: 57px;
		background: url(/assets/img/common/stamp.png) no-repeat;
		background-size: cover;
	}

	&__contents {
		position: absolute;
		top: calc(50% + 30px);
		left: 50%;
		max-width: 320px;
		padding: 30px 40px 35px;
		background: #a32a00 url(/assets/img/top/visual-top_bg@pc.png) center center no-repeat;
		background-size: contain;
	  box-shadow: 0 0 7px rgba(0, 0, 0, .3);
		color: #fff;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	&__text {
		margin-top: 20px;
		letter-spacing: normal;
		line-height: 2;
	}

	&__list {
		margin-top: 15px;

		li {
			font-size: 1.6rem;
			font-weight: bold;

			&:not(:first-child) {
				margin-top: 10px;
			}

			a {
				display: flex;
				align-items: center;
				justify-content: center;
			  height: 40px;
			  border-radius: 4px;
			  background-color: #671800;

			  &:hover {
			  	background-color: $color_accent;
			  	text-decoration: none;
			  }
			}
		}
	}

	@media only screen and (max-width: $point_sp) {
		height: auto;
		padding-top: calc(340 / #{$base_number_sp} * 100vw);
		background: url(/assets/img/top/visual-top_img@sp.jpg) center top no-repeat;
		background-size: 100% auto;

		&::before {
			top: calc(232 / #{$base_number_sp} * 100vw);
			right: calc(20 / #{$base_number_sp} * 100vw);
			bottom: auto;
			width: calc(86 / #{$base_number_sp} * 100vw);
			height: calc(86 / #{$base_number_sp} * 100vw);
		}

		&__contents {
			position: static;
			max-width: none;
			padding: calc(65 / #{$base_number_sp} * 100vw) calc(50 / #{$base_number_sp} * 100vw) calc(50 / #{$base_number_sp} * 100vw);
			background: url(/assets/img/top/visual-top_bg@sp.png);
		  box-shadow: none;
			transform: none;
		}

		&__headline {
			img {
				width: calc(222 / #{$base_number_sp} * 100vw);
			}
		}

		&__text {
			margin-top: calc(30 / #{$base_number_sp} * 100vw);
			line-height: 1.5;
		}

		&__list {
			margin-top: calc(30 / #{$base_number_sp} * 100vw);

			li {
				max-width: calc(440 / #{$base_number_sp} * 100vw);
				margin-right: auto;
				margin-left: auto;
				font-size: calc(28 / #{$base_number_sp} * 100vw);

				&:not(:first-child) {
					margin-top: calc(20 / #{$base_number_sp} * 100vw);
				}

				a {
				  height: calc(74 / #{$base_number_sp} * 100vw);
				  border-radius: calc(8 / #{$base_number_sp} * 100vw);
				}
			}
		}
	}
}
</style>
