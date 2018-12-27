<template>
  <header class="header">
  <h1 class="header__logo">
    <a href="/">
      <img src="/assets/img/common/logo.png" alt="" width="106" height="100">
      <p>一般社団法人<b>焼き餃子協会</b><span>Yaki Gyoza Association</span></p>
    </a>
  </h1>

  <div class="menu-trigger">
    <div><span></span></div>
    <p><span>MENU</span><span>CLOSE</span></p>
  </div>

  <nav class="nav-global">

    <ul class="nav-global__nav">
      <li><a href="#about">焼き餃子協会について</a></li>
      <li><a href="/news/">お知らせ</a></li>
      <li><a href="#entry">入会案内</a></li>
      <li><a href="#contact">お問い合わせ</a></li>
    </ul><!-- /.nav-global__nav -->

    <ul class="nav-global__language">
      <li><a href="#" class="is-active">JPN</a></li>
      <li><a href="#">ENG</a></li>
    </ul><!-- /.nav-global__language -->

    <ul class="nav-global__sns">
      <li>
        <a href="https://www.facebook.com/yaki.gyoza.japan/" target="_blank" class="-fb">
          <img src="/assets/img/common/ic_sns_facebook.svg" alt="facebook">
        </a>
      </li>
      <li>
        <a href="https://twitter.com/YakiGyozaJapan?lang=ja" target="_blank" class="-tw">
          <img src="/assets/img/common/ic_sns_twitter.svg" alt="twitter">
        </a>
      </li>
    </ul><!-- /.nav-global__sns -->

  </nav><!-- /.nav-global -->

  </header><!-- /.header -->
</template>

<style lang="scss" scoped>
  .header {
  	grid-area: header;
  	position: fixed;
  	top: 0;
  	bottom: 0;
  	left: 0;
  	z-index: 100;
  	width: $base_width_sub;
  	background-color: $color_main;

  	&__logo {
  		background-color: #fff;
  		font-size: 1.2rem;
  		line-height: 1;
  		text-align: center;

  		a {
  			padding: 20px 10px;
  			&:hover {
  				text-decoration: none;
  			}
  		}

  		img,
  		b,
  		span {
  			display: block;
  		}

  		img {
  			margin: 0 auto 7px;
  		}

  		b {
  			margin-top: 5px;
  			font-size: 2rem;
  			font-weight: bold;
  		}

  		span {
  			margin-top: 3px;
  			font-size: 1rem;
  		}
  	}

  	@media only screen and (max-width: $point_sp) {
  		position: absolute;
  		top: calc(50 / #{$base_number_sp} * 100vw);
  		right: 0;
  		bottom: auto;
  		width: auto;
  		background-color: transparent;

  		&.is-fixed {
  			position: fixed;
  			top: 0;
  		}

  		&__logo {
  			background-color: #fff;
  			font-size: calc(21 / #{$base_number_sp} * 100vw);
  			text-align: left;

  			a {
  				display: flex;
  				min-height: calc(120 / #{$base_number_sp} * 100vw);
  				padding: calc(4 / #{$base_number_sp} * 100vw) calc(130 / #{$base_number_sp} * 100vw) 0 calc(10 / #{$base_number_sp} * 100vw);
  				align-items: center;
  			}

  			img {
  				width: calc(106 / #{$base_number_sp} * 100vw);
  				margin: 0 calc(8 / #{$base_number_sp} * 100vw) 0 0;
  			}

  			b {
  				margin-top: calc(6 / #{$base_number_sp} * 100vw);
  				font-size: calc(36 / #{$base_number_sp} * 100vw);
  				font-weight: bold;
  			}

  			span {
  				margin-top: calc(6 / #{$base_number_sp} * 100vw);
  				font-size: calc(18 / #{$base_number_sp} * 100vw);
  			}
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

  .nav-global {

  	&__nav {

  		li {
  			color: #fff;
  			font-weight: bold;

  			a {
  				overflow: hidden;
  				display: flex;
  				align-items: center;
  				justify-content: center;
  				position: relative;
  				z-index: 3;
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
  					pointer-events: none;
  					&::after {
  						visibility: visible;
  						opacity: 1;
  					}
  				}
  			}
  		}
  	}

  	&__language {
  		display: flex;
  		justify-content: center;
  		margin-top: 20px;
  		margin-left: -10px;

  		li {
  			flex-basis: 60px;
  			height: 28px;
  			margin-left: 10px;
  			font-size: 1.2rem;
  			color: #fff;

  			a {
  				display: flex;
  				align-items: center;
  				justify-content: center;
  				height: 100%;
  				border: 1px solid #756c63;
  				border-radius: 4px;
  				text-align: center;

  				&:hover,
  				&.is-active {
  					background-color: #756c63;
  				}

  				&:hover {
  					text-decoration: none;
  				}

  				&.is-active {
  					pointer-events: none;
  				}
  			}
  		}
  	}

  	&__sns {
  		display: flex;
  		margin: 40px 25px 0 10px;
  		li {
  			margin-left: 15px;
  			a {
  				&:hover {
  					opacity: .7;
  					text-decoration: none;
  				}
  			}
  		}
  	}

  	@media only screen and (max-width: $point_sp) {
  		display: none;
  		padding: 0 calc(40 / #{$base_number_sp} * 100vw) calc(20 / #{$base_number_sp} * 100vw);
  		border-top: 2px solid #c5b59e;
  		background-color: $ground_color;

  		&__nav {

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
  						z-index: auto;
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

  		&__language {
  			margin-top: calc(20 / #{$base_number_sp} * 100vw);
  			margin-left: calc(-20 / #{$base_number_sp} * 100vw);

  			li {
  				flex-basis: calc(120 / #{$base_number_sp} * 100vw);
  				height: calc(56 / #{$base_number_sp} * 100vw);
  				margin-left: calc(20 / #{$base_number_sp} * 100vw);
  				color: #756c63;
  				font-size: calc(22 / #{$base_number_sp} * 100vw);

  				a {
  					border-radius: calc(8 / #{$base_number_sp} * 100vw);

  					&:hover,
  					&.is-active {
  						color: #fff;
  					}
  				}
  			}
  		}

  		&__sns {
  			justify-content: center;
  			margin: calc(20 / #{$base_number_sp} * 100vw) 0 0 calc(-20 / #{$base_number_sp} * 100vw);
  			li {
  				margin-left: calc(20 / #{$base_number_sp} * 100vw);

  				img {
  					width: calc(50 / #{$base_number_sp} * 100vw);
  				}
  			}
  		}
  	}
  }

</style>
