<template>
  <h1 class="logo">
    <img src="/assets/img/common/logo.png" alt="" width="106" height="100">
    <p>一般社団法人<b>焼き餃子協会</b><span>Yaki Gyoza Association</span></p>
    <nuxt-link v-scroll-to="'#top'" to="/"></nuxt-link>
  </h1>
</template>

<style lang="scss" scoped>
.logo {
  position: relative;
  background-color: #fff;
  font-size: 1.2rem;
  line-height: 1;
  text-align: center;
  padding: 20px 10px;
  @include mq() {
    display: flex;
    min-height: calc(120 / #{$base_number_sp} * 100vw);
    padding: calc(4 / #{$base_number_sp} * 100vw) calc(130 / #{$base_number_sp} * 100vw) 0 calc(10 / #{$base_number_sp} * 100vw);
    align-items: center;

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

a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
</style>
