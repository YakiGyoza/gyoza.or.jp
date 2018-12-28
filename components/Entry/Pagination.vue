<template>
  <div>
    <ul>
      <li class="-prev"><a href="#">前へ</a></li>
      <li><a href="#" class="is-active">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li class="-skip"></li>
      <li><a href="#">10</a></li>
      <li class="-next"><a href="#">次へ</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  margin-left: -10px;
}

li {
  margin-left: 10px;
  text-align: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding-bottom: 2px;
    border: 1px solid #9e4620;
    border-radius: 4px;
    color: #9e4620;
    text-decoration: none;

    &:hover,
    &.is-active {
      background-color: #9e4620;
      color: #fff;
    }
    &.is-active {
      pointer-events: none;
    }
  }

  &.-prev,
  &.-next {
    text-align: left;
    text-indent: -9999px;
    a {
      display: block;
      position: relative;
      border: 0;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        width: 13px;
        height: 13px;
        border-top: 2px solid #9e4620;
        border-right: 2px solid #9e4620;
        transition: .3s;
      }

      &:hover {
        background-color: transparent;
        &::before {
          opacity: .7;
        }
      }
    }
  }
  &.-prev {
    a {
      &::before {
        left: calc(50% - 4px);
        transform: translateY(-50%) rotate(-135deg);
      }
    }
  }
  &.-next {
    a {
      &::before {
        right: calc(50% - 4px);
        transform: translateY(-50%) rotate(45deg);
      }
    }
  }

  &.-skip {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 44px;
    height: 44px;
    color: #9e4620;
    &::before {
      content: "\2026";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

@media only screen and (max-width: $point_sp) {

  ul {
    margin-left: calc(-10 / #{$base_number_sp} * 100vw);
  }

  li {
    margin-left: calc(10 / #{$base_number_sp} * 100vw);

    &:nth-child(6),
    &:nth-child(7) {
      display: none;
    }

    a {
      width: calc(60 / #{$base_number_sp} * 100vw);
      height: calc(60 / #{$base_number_sp} * 100vw);
      padding-bottom: calc(2 / #{$base_number_sp} * 100vw);
      border-radius: calc(8 / #{$base_number_sp} * 100vw);
    }

    &.-prev,
    &.-next {
      a {
        &::before {
          width: calc(26 / #{$base_number_sp} * 100vw);
          height: calc(26 / #{$base_number_sp} * 100vw);
        }
      }
    }
    &.-prev {
      a {
        &::before {
          left: calc(50% - calc(12 / #{$base_number_sp} * 100vw));
        }
      }
    }
    &.-next {
      a {
        &::before {
          right: calc(50% - calc(12 / #{$base_number_sp} * 100vw));
        }
      }
    }

    &.-skip {
      width: calc(60 / #{$base_number_sp} * 100vw);
      height: calc(60 / #{$base_number_sp} * 100vw);
    }
  }
}
</style>
