<template>
  <div>
    <ul>
      <li><input type="checkbox" value="すべて" name="narrow" id="narrow01" checked><label for="narrow01">すべて</label></li>
      <li><input type="checkbox" value="トピック" name="narrow" id="narrow02"><label for="narrow02">トピック</label></li>
      <li><input type="checkbox" value="レポート" name="narrow" id="narrow03"><label for="narrow03">レポート</label></li>
      <li><input type="checkbox" value="メディア" name="narrow" id="narrow04"><label for="narrow04">メディア</label></li>
      <li><input type="checkbox" value="イベント" name="narrow" id="narrow05"><label for="narrow05">イベント</label></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin: -10px 0 35px -10px;
}

li {
  margin-top: 10px;
  margin-left: 10px;

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }
  input[type="checkbox"] + label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    padding-bottom: 3px;
    border-radius: 4px;
    background-color: #dbd1c2;
    color: $color_accent;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    transition: .3s;
  }
  input[type="checkbox"]:checked + label {
    background-color: $color_accent;
    color: #fff;
  }
}

@media only screen and (max-width: $point_sp) {

  ul {
    justify-content: space-between;
    margin: calc(-20 / #{$base_number_sp} * 100vw) 0 calc(20 / #{$base_number_sp} * 100vw) 0;
  }

  li {
    flex-basis: calc(270 / #{$base_number_sp} * 100vw);
    margin-top: calc(20 / #{$base_number_sp} * 100vw);
    margin-left: 0;

    &:first-child {
      flex-basis: 100%;
    }

    input[type="checkbox"] + label {
      width: 100%;
      height: calc(74 / #{$base_number_sp} * 100vw);
      padding-bottom: calc(4 / #{$base_number_sp} * 100vw);
      border-radius: calc(8 / #{$base_number_sp} * 100vw);
      font-size: calc(28 / #{$base_number_sp} * 100vw);
    }
  }
}

</style>
