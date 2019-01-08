<template>
  <section class="area-common -about">
  <div class="wrap">

  <div class="unit-about">
  <div class="unit-about__contents">
  <h2 class="unit-about__headline">一般社団法人<br class="display-sp">焼き餃子協会とは</h2>
  <div class="unit-about__text">
  <p>世界には餃子（またはそれに似た料理）がさまざまに存在します。<br>日本では焼き餃子が独自に発達し、多様な具による餃子が開発されて、通販で購入できる数だけでも1500種類以上存在します。<br>一般社団法人焼き餃子協会は、消費者がより美味しい餃子を楽しむ社会を目指して、餃子や油・調味料そして調理器具などの餃子に関連する業界の発展を支援し、また消費者にも美味しい餃子の焼き方や食べ方などの情報提供を行って参ります。</p>
  </div>
  </div><!-- /.unit-about__contents -->
  <div class="unit-about__image"><img src="/assets/img/top/about_img.png" alt=""></div>
  </div><!-- /.unit-about -->

  <!-- <ul class="list-about">
  <li><a href="#">私たちの理念</a></li>
  <li><a href="#">組織概要</a></li>
  <li><a href="#">役員・パートナー</a></li>
  <li><a href="#">これまでの沿革</a></li>
  </ul> --><!-- /.list-about -->

  </div><!-- /.wrap -->
  </section><!-- /.area-common -->
</template>

<style lang="scss" scoped>
.area-common {
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

  @include mq() {
    background: none;
    &::before,
    &::after {
      top: 0;
//      top: calc(120 / #{$base_number_sp} * 100vw);
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

}

.unit-about {
	display: flex;
	justify-content: space-between;

	&__contents {
		flex: 1;
		color: #fff;
	}

	&__headline {
		margin-bottom: 35px;
		font-size: 3rem;
		font-weight: bold;
	}

	&__text {
		padding-right: 25px;
		font-size: 1.6rem;
		line-height: 1.875;
		text-align: justify;
		text-justify: inter-ideograph;
	}

	&__image {
		flex-basis: calc(440 / #{$base_number} * 100%);
	}

	@media only screen and (max-width: $point_sp) {
		display: block;
		margin-right: calc(-10 / #{$base_number_sp} * 100vw);
		margin-left: calc(-10 / #{$base_number_sp} * 100vw);

		&__headline {
			margin-bottom: calc(30 / #{$base_number_sp} * 100vw);
			font-size: calc(48 / #{$base_number_sp} * 100vw);
			text-align: center;
		}

		&__text {
			margin-top: calc(45 / #{$base_number_sp} * 100vw);
			padding-right: 0;
			font-size: calc(28 / #{$base_number_sp} * 100vw);
			line-height: 2;
		}
	}
}
</style>
