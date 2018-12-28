<template>
  <ul class="sns">
    <li>
      <a href="https://www.facebook.com/yaki.gyoza.japan/" target="_blank" class="-fb">
        <img src="/assets/img/common/ic_sns_facebook.svg" alt="facebook">
      </a>
    </li>
    <li>
      <a href="https://twitter.com/YakiGyozaJapan" target="_blank" class="-tw">
        <img src="/assets/img/common/ic_sns_twitter.svg" alt="twitter">
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.sns {
  display: flex;
  margin: 40px 25px 0 10px;
}

li {
  margin-left: 15px;
}

a {
  &:hover {
    opacity: .7;
    text-decoration: none;
  }
}
</style>
