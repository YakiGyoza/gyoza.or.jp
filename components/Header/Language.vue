<template>
  <ul class="language">
    <li><a href="#" class="is-active">JPN</a></li>
    <li><a href="#">ENG</a></li>
  </ul>
</template>

<style lang="scss" scoped>
.language {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: -10px;
}

li {
  flex-basis: 60px;
  height: 28px;
  margin-left: 10px;
  font-size: 1.2rem;
  color: #fff;
}

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
</style>
