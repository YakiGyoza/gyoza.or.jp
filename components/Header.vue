<template>
  <header>

    <HeaderLogo />

    <nav class="nav">
      <ul class="menu">
        <li><a href="/#about">焼き餃子協会について</a></li>
        <li><a href="/#news">お知らせ</a></li>
        <li><a href="/#entry">入会案内</a></li>
        <li><a href="/#contact">お問い合わせ</a></li>
      </ul>

      <HeaderLanguage />
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
}
</script>

<style lang="scss" scoped>

.menu {
  li {
    color: #fff;
    font-weight: bold;
    font-size: 1.4rem;

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

    }
  }
}

</style>
