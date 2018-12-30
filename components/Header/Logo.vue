<template>
  <h1 class="logo">
    <nuxt-link v-scroll-to="'#top'" to="/">
      <img src="/assets/img/common/logo.png" alt="" width="106" height="100">
      <p>一般社団法人<b>焼き餃子協会</b><span>Yaki Gyoza Association</span></p>
    </nuxt-link>
  </h1>
</template>

<style lang="scss" scoped>
.logo {
  background-color: #fff;
  font-size: 1.2rem;
  line-height: 1;
  text-align: center;
}

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
</style>
