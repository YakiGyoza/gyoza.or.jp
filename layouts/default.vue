<template>
  <div class="container">
    <HeaderNavi />
    <main role="main">
      <nuxt/>
      <p class="pagetop"><a href="#">PAGE TOP</a></p>
    </main>
    <FooterNavi />
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
		display: block;
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
  display: grid;
  grid-template-columns: $base_width_sub 1fr;
  grid-template-rows: minmax(max-content, 1fr) auto;
  grid-template-areas: "header main" "header footer";
}


main {
	overflow: hidden;
	background-color: rgba($ground_color, .5);
	grid-area: main;
}

/* contents */
.contents {
	position: relative;

	@media only screen and (max-width: $point_sp) {
		padding-top: calc(170 / #{$base_number_sp} * 100vw);
	}
}

/* tagline */
.tagline {
	position: absolute;
	top: 7px;
	right: 270px;
	// right: 395px;
	left: 20px;
	z-index: 10;
	color: #fff;

	@media only screen and (max-width: $point_sp) {
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		right: 0;
		left: 0;
		height: calc(50 / #{$base_number_sp} * 100vw);
		color: #fff;
		background-color: #000;
		font-size: calc(20 / #{$base_number_sp} * 100vw);
		text-align: center;
	}
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

</style>
