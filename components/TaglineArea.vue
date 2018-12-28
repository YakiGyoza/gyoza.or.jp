<template>
  <p class="tagline">美味しい餃子を作る人と食べる人を、もっと増やしたい。</p>
</template>

<style lang="scss" scoped>
.tagline {
	position: absolute;
	top: 7px;
	right: 270px;
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
</style>
