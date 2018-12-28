<template>
  <div>
    <input id="menuFlag" type="checkbox" />
    <label class="menuTrigger" for="menuFlag">
      <div class="button"><span></span></div>
    </label>
    <div class="container">
      <HeaderNavi class="header" />
      <main role="main">
        <nuxt/>
        <p class="pagetop"><a href="#">PAGE TOP</a></p>
      </main>
      <FooterNavi />
    </div>
  </div>
</template>

<script>
import HeaderNavi from '~/components/Header.vue'
import FooterNavi from '~/components/Footer.vue'

export default {
  components: {
    HeaderNavi,
    FooterNavi
  }
}
</script>

<style lang="scss" scoped>
#menuFlag {
  display: none;
}
.menuTrigger {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  @include vw('width',  76);
  @include vw('height', 60);
  @include mq() {
    display: block;
  }

}

#menuFlag ~ .menuTrigger > .button {
  position: relative;
  @include vw('width', 56);
  @include vw('height', 40);
  @include vw('margin', 10);

  > span,
  &::before,
  &::after {
    display: inline-block;
    position: absolute;
    left: 0;
    width: 100%;
    height: calc(6 / #{$base_number_sp} * 100vw);
    border-radius: calc(8 / #{$base_number_sp} * 100vw);
    background-color: #fff;
    transition: .3s;
  }
  > span {
    top: 50%;
    transform: translateY(-50%);
  }
  &::before,
  &::after {
    content: "";
  }
  &::before { top: 0;}
  &::after { bottom: 0;}
}

#menuFlag:checked ~ .menuTrigger > .button {
  span {
    opacity: 0;
  }
  &::before {
    transform: translateY(calc(17 / #{$base_number_sp} * 100vw)) rotate(-45deg);
  }
  &::after {
    transform: translateY(calc(-17 / #{$base_number_sp} * 100vw)) rotate(45deg);
  }
}

.header {
  grid-area: header;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: $base_width_sub;
  background-color: $color_main;
  overflow: hidden;
}

@include mq() {
  .header {
    left: -$base_width_sub;
  }
}

#menuFlag:checked ~ .container {
  left: $base_width_sub;
}
#menuFlag:checked ~ .container > .header {
  left: 0;
}

</style>

<style lang="scss">
html,
body {
	height: 100%;
}

html {
	font-size: 62.5%;
	-ms-overflow-style: -ms-autohiding-scrollbar;
}

body {
	margin: 0 auto;
	color: $text_color_main;
	font-family: $font_base;
	font-size: 1.4rem;
	line-height: 1.5;
	-webkit-text-size-adjust: 100%;
	letter-spacing: .03em;

	&.is-fixed {
		position: fixed;
		width: 100%;
	}

	@media only screen and (max-width: $point_sp) {
		font-size: calc(24 / #{$base_number_sp} * 100vw);
	}
}

img {
	max-width: 100%;
	height: auto;
	vertical-align: bottom;
	transition: .3s;
	&[src*="@sp."] {
		display: none;
	}
	@media only screen and (max-width: $point_sp) {
		&[src*="@pc."] {
			display: none;
		}
		&[src*="@sp."] {
			display: inline;
		}
	}
}

a {
	color: $link_color;
	text-decoration: none;
	transition: .3s;
	&:hover {
		color: $link_color_hover;
		text-decoration: underline;
	}
}

.wrap {
	box-sizing: content-box;
	max-width: $base_width;
	margin-right: auto;
	margin-left: auto;
	padding-right: 20px;
	padding-left: 20px;

	@media only screen and (max-width: $point_sp) {
		padding-right: calc(40 / #{$base_number_sp} * 100vw);
		padding-left: calc(40 / #{$base_number_sp} * 100vw);
	}
}

.container {
  position: relative;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: $base_width_sub 1fr;
  grid-template-rows: minmax(max-content, 1fr) auto;
  grid-template-areas: "header main" "header footer";

  @media only screen and (max-width: $point_sp) {
		display: block;
		font-size: calc(24 / #{$base_number_sp} * 100vw);
	}
}


main {
	overflow: hidden;
	background-color: rgba($ground_color, .5);
	grid-area: main;
}

/* contents */
.contents {
	position: relative;
}


.pagetop {
	position: fixed;
	right: 0;
	bottom: 0;
	z-index: 100;
	text-indent: -9999px;
	a {
		display: block;
		position: relative;
		width: 60px;
		height: 60px;
		background-color: $color_main;
		&::before {
			content: "";
			position: absolute;
			top: calc(50% + 6px);
			left: 50%;
			width: 20px;
			height: 20px;
			border-top: 2px solid #fff;
			border-left: 2px solid #fff;
			transform: translate(-50%, -50%) rotate(45deg);
			transition: .3s;
		}

		&:hover {
			background-color: lighten($color_main, 10%);
			&::before {
				top: calc(50% + 2px);
			}
		}
	}

	@media only screen and (max-width: $point_sp) {
		a {
			width: calc(100 / #{$base_number_sp} * 100vw);
			height: calc(100 / #{$base_number_sp} * 100vw);
			&::before {
				top: calc(50% + calc(8 / #{$base_number_sp} * 100vw))!important;
				width: calc(34 / #{$base_number_sp} * 100vw);
				height: calc(34 / #{$base_number_sp} * 100vw);
			}
		}
	}
}


.area-common {
	padding-top: 95px;
	padding-bottom: 100px;

	&__lead {
		margin-top: 15px;
		font-size: 1.6rem;
		line-height: 1.875;
		text-align: center;
	}

	&__btn {
		margin-top: 50px;
	}

	&.-news {
		background-color: $color_sub;
	}

	&.-about {
		position: relative;
		z-index: 3;
		background: url(/assets/img/top/about_bg@pc.jpg) center center no-repeat;
		background-size: cover;

		&::after {
			content: "";
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: -1;
			background-color: rgba($color_main, .7);
		}
	}

	&.-entry {}

	&.-project {
		background: $color_sub url(/assets/img/top/project_bg@pc.jpg) center bottom no-repeat;
		background-size: 100% auto;
	}

	&.-contact {
		background: url(/assets/img/top/contact_bg@pc.jpg) center center no-repeat;
		background-size: cover;
	}

	&.-sitemap {
		padding-top: 55px;
		padding-bottom: 60px;
		background-color: $color_sub;
	}

	@media only screen and (max-width: $point_sp) {
		margin-top: calc(-120 / #{$base_number_sp} * 100vw);
		padding-top: calc(180 / #{$base_number_sp} * 100vw);
		padding-bottom: calc(80 / #{$base_number_sp} * 100vw);

		.top & {
			padding-top: calc(200 / #{$base_number_sp} * 100vw);
			padding-bottom: calc(100 / #{$base_number_sp} * 100vw);
		}

		&__lead {
			margin-top: calc(35 / #{$base_number_sp} * 100vw);
			font-size: calc(28 / #{$base_number_sp} * 100vw);
			line-height: 2;
			text-align: left;
		}

		&__btn {
			margin-top: calc(80 / #{$base_number_sp} * 100vw);
		}

		&.-about {
			background: none;
			&::before,
			&::after {
				top: calc(120 / #{$base_number_sp} * 100vw);
			}
			&::before {
				content: "";
				position: absolute;
				right: 0;
				bottom: 0;
				left: 0;
				z-index: -2;
				background: url(/assets/img/top/about_bg@sp.jpg) center center no-repeat;
				background-size: cover;
			}
		}

		&.-project {
			position: relative;
			z-index: 3;
			background: none;
			&::before {
				content: "";
				position: absolute;
				top: calc(120 / #{$base_number_sp} * 100vw);
				right: 0;
				bottom: 0;
				left: 0;
				z-index: -2;
				background: url(/assets/img/top/project_bg@sp.jpg) center bottom no-repeat;
				background-size: 100% auto;
			}
		}

		&.-contact {
			position: relative;
			z-index: 3;
			background: none;
			&::before {
				content: "";
				position: absolute;
				top: calc(120 / #{$base_number_sp} * 100vw);
				right: 0;
				bottom: 0;
				left: 0;
				z-index: -2;
				background: url(/assets/img/top/contact_bg@sp.jpg) center center no-repeat;
				background-size: cover;
			}
		}

		&.-sitemap {
			margin-top: calc(-120 / #{$base_number_sp} * 100vw);
			padding-top: calc(200 / #{$base_number_sp} * 100vw);
			padding-bottom: calc(100 / #{$base_number_sp} * 100vw);
		}
	}
}


.headline {
	margin-bottom: 40px;
	font-size: 3rem;
	font-weight: bold;
	text-align: center;
	line-height: 1.3;

	> span {
		position: relative;
		display: inline-block;
		&::before,
		&::after {
			content: "";
			position: absolute;
			background-repeat: no-repeat;
			background-size: 100% 100%;
		}
		&::before {
			left: 0;
		}
		&::after {
			right: 0;
		}
	}

	&.-news {
		> span {
			padding-right: 165px;
			padding-left: 165px;
			&::before,
			&::after {
				top: -50px;
				width: 129px;
				height: 133px;
			}
			&::before {
				background-image: url(/assets/img/common/ic_h_news_01.png);
			}
			&::after {
				background-image: url(/assets/img/common/ic_h_news_02.png);
			}
		}
	}

	&.-entry {
		> span {
			padding-right: 145px;
			padding-left: 145px;
			&::before,
			&::after {
				top: -55px;
				width: 107px;
				height: 110px;
			}
			&::before {
				background-image: url(/assets/img/common/ic_h_entry_01.png);
			}
			&::after {
				background-image: url(/assets/img/common/ic_h_entry_02.png);
			}
		}
	}

	&.-project {
		> span {
			padding-right: 140px;
			padding-left: 165px;
			&::before,
			&::after {
				top: -55px;
				height: 134px;
			}
			&::before {
				width: 124px;
				background-image: url(/assets/img/common/ic_h_project_01.png);
			}
			&::after {
				width: 102px;
				background-image: url(/assets/img/common/ic_h_project_02.png);
			}
		}
	}

	&.-contact {
		color: #fff;
	}

	&.-sitemap {
		margin-bottom: 25px;
		font-size: 2.2rem;
		text-align: left;
	}

	@media only screen and (max-width: $point_sp) {
		margin-bottom: calc(50 / #{$base_number_sp} * 100vw);
		font-size: calc(40 / #{$base_number_sp} * 100vw);
		letter-spacing: .1em;

		&.-news {
			> span {
				padding-right: calc(155 / #{$base_number_sp} * 100vw);
				padding-left: calc(155 / #{$base_number_sp} * 100vw);
				&::before,
				&::after {
					top: calc(-20 / #{$base_number_sp} * 100vw);
					width: calc(129 / #{$base_number_sp} * 100vw);
					height: calc(133 / #{$base_number_sp} * 100vw);
				}
			}
		}

		&.-entry {
			> span {
				padding-right: calc(135 / #{$base_number_sp} * 100vw);
				padding-left: calc(135 / #{$base_number_sp} * 100vw);
				&::before,
				&::after {
					top: calc(-40 / #{$base_number_sp} * 100vw);
					width: calc(107 / #{$base_number_sp} * 100vw);
					height: calc(110 / #{$base_number_sp} * 100vw);
				}
			}
		}

		&.-project {
			> span {
				padding-right: calc(140 / #{$base_number_sp} * 100vw);
				padding-left: calc(155 / #{$base_number_sp} * 100vw);
				&::before,
				&::after {
					top: calc(-55 / #{$base_number_sp} * 100vw);
					height: calc(134 / #{$base_number_sp} * 100vw);
				}
				&::before {
					width: calc(124 / #{$base_number_sp} * 100vw);
				}
				&::after {
					width: calc(102 / #{$base_number_sp} * 100vw);
				}
			}
		}

		&.-sitemap {
			margin-bottom: calc(15 / #{$base_number_sp} * 100vw);
			font-size: calc(28 / #{$base_number_sp} * 100vw);
			letter-spacing: .03em;
		}
	}
}


.btn {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	border-radius: 4px;
	font-size: 1.6rem;
	font-weight: bold;

	&:hover {
		text-decoration: none;
	}

	&.-default {
		max-width: 300px;
		margin-right: auto;
		margin-left: auto;
		border: 1px solid $color_accent;
		color: $color_accent;

		&:hover {
			background-color: $color_accent;
			color: #fff;
			text-decoration: none;
		}
	}

	@media only screen and (max-width: $point_sp) {
		height: calc(100 / #{$base_number_sp} * 100vw);
		border-radius: calc(8 / #{$base_number_sp} * 100vw);
		font-size: calc(28 / #{$base_number_sp} * 100vw);
		font-weight: bold;

		&.-default {
			max-width: none;
		}
	}
}

</style>
