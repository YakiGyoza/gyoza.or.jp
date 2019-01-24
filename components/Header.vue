<template>
  <header class="header">

    <HeaderLogo />

    <div class="menu-trigger" @click="toggleMenu" :class="{'is-active': isOpen}">
      <div><span></span></div>
      <p><span>MENU</span><span>CLOSE</span></p>
    </div>

    <nav class="nav-global" :class="{'is-active': isOpen}">
      <ul class="menu">
        <li><nuxt-link to="/#about" v-smooth-scroll>焼き餃子協会について</nuxt-link></li>
        <li><nuxt-link to="/#news" v-smooth-scroll>お知らせ</nuxt-link></li>
        <li><nuxt-link to="/#entry" v-smooth-scroll>入会案内</nuxt-link></li>
        <li><nuxt-link to="/#contact"  v-smooth-scroll>お問い合わせ</nuxt-link></li>
      </ul>

      <!--<HeaderLanguage />-->
      <HeaderSns />
    </nav>

  </header>
</template>

<script>
import HeaderLogo from '~/components/Header/Logo.vue'
import HeaderLanguage from '~/components/Header/Language.vue'
import HeaderSns from '~/components/Header/Sns.vue'

export default {
  components: {
    HeaderLogo,
    HeaderLanguage,
    HeaderSns,
  },
  data: () => {
    return { isOpen: false }
  },
  methods: {
    toggleMenu () {
      console.log(this.isOpen);
      this.isOpen = !this.isOpen;
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  grid-area: header;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
//	z-index: 100;
	width: $base_width_sub;
	background-color: $color_main;
  @include mq() {
    position: relative;
//		top: calc(50 / #{$base_number_sp} * 100vw);
		right: 0;
		bottom: auto;
		width: auto;
		background-color: transparent;

		&.is-fixed {
			position: fixed;
			top: 0;
		}
  }
}

.menu-trigger {
	display: none;
	position: absolute;
	top: 0;
	right: 0;
	width: calc(120 / #{$base_number_sp} * 100vw);
	height: calc(120 / #{$base_number_sp} * 100vw);
	background-color: $color_main;
	color: #fff;
	cursor: pointer;
	text-align: center;
	> div {
		position: relative;
		width: calc(56 / #{$base_number_sp} * 100vw);
		height: calc(40 / #{$base_number_sp} * 100vw);
		margin: calc(28 / #{$base_number_sp} * 100vw) auto calc(12 / #{$base_number_sp} * 100vw);

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

	&.is-active {
		> div {
			> span {
				opacity: 0;
			}
			&::before {
				transform: translateY(calc(17 / #{$base_number_sp} * 100vw)) rotate(-45deg);
			}
			&::after {
				transform: translateY(calc(-17 / #{$base_number_sp} * 100vw)) rotate(45deg);
			}
		}

		> p {
			> span {
				display: none;
				&:last-child {
					display: block;
				}
			}
		}
	}

	> p {
		font-size: calc(20 / #{$base_number_sp} * 100vw);
		line-height: 1;
		> span {
			&:last-child {
				display: none;
			}
		}
	}

	@media only screen and (max-width: $point_sp) {
		display: block;
	}
}


.menu {
  li {
    color: #fff;
    font-weight: bold;

    a {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
//      z-index: 3;
      height: 70px;
      padding-right: 10px;
      padding-left: 10px;
      border-bottom: 1px solid #5d5248;
      text-align: center;
      &::before,
      &::after {
        content: "";
        position: absolute;
      }
      &::before {
        top: 0;
        bottom: 0;
        left: -15%;
        z-index: -1;
        width: 0;
        background-color: $color_accent;
        transform: skew(-30deg);
        transition: .3s;
      }
      &::after {
        visibility: hidden;
        opacity: 0;
        top: 15px;
        bottom: 15px;
        left: 0;
        border-left: 6px solid $color_accent;
      }

      &:hover {
        text-decoration: none;
        &::before {
          width: 130%;
        }
      }

      &.is-active {
//        pointer-events: none;
        &::after {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }

  @include mq() {
    li {
      color: $text_color_main;

      a {
        justify-content: flex-start;
        height: calc(80 / #{$base_number_sp} * 100vw);
        padding-right: calc(20 / #{$base_number_sp} * 100vw);
        padding-left: calc(60 / #{$base_number_sp} * 100vw);
        border-bottom-color: #c5b59e;
        &::before {
          top: 50%;
          bottom: auto;
          left: calc(20 / #{$base_number_sp} * 100vw);
//          z-index: auto;
          width: calc(24 / #{$base_number_sp} * 100vw)!important;
          height: calc(24 / #{$base_number_sp} * 100vw);
          border-radius: calc(24 / #{$base_number_sp} * 100vw);
          background-color: $color_accent;
          transform: translateY(-50%);
        }
        &::after {
          visibility: visible;
          opacity: 1;
          top: 50%;
          bottom: auto;
          left: calc(26 / #{$base_number_sp} * 100vw);
          width: calc(8 / #{$base_number_sp} * 100vw);
          height: calc(8 / #{$base_number_sp} * 100vw);
          border-top: 1px solid $color_sub;
          border-right: 1px solid $color_sub;
          border-left: 0;
          transform: translateY(-50%) rotate(45deg);
        }
      }
    }
  }
}


.nav-global {
  &.is-active {
//    pointer-events: none;
    &::after {
      visibility: visible;
      opacity: 1;
    }
  }
  @include mq() {
    display: none;
		padding: 0 calc(40 / #{$base_number_sp} * 100vw) calc(20 / #{$base_number_sp} * 100vw);
		border-top: 2px solid #c5b59e;
		background-color: $ground_color;
    &.is-active {
      display: block;
    }
  }
}

</style>
