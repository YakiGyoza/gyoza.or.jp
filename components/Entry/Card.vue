<template>
  <div class="card">
    <nuxt-link :to="{ name: 'posts-id', params: { id: id }}">
      <div class="image"><img :src="image | imageSrc" alt="" /></div>
      <div class="contents">
        <p class="label">{{ type }}</p>
        <p class="date">{{ publishDate | date }}</p>
        <h3 class="title">{{ title }}</h3>
      </div>
      <div class="description">
        <p>{{ description }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import formatDate from 'date-fns/format'

export default {
  props: {
    id: {
      type: String,
    },
    image: {
      type: Object,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
    },
    publishDate: {
      type: String,
    },
  },
  filters: {
    date: function (value) {
      if (!value) return '';
      const d = new Date(value);
      return formatDate(d, 'YYYY/MM/DD');
    },
    imageSrc: function(image) {
      if ( !image || !image.fields.file ) return '/assets/img/dummy/img_dummy.jpg';
      return image.fields.file.url + '?h=150';
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  flex-basis: calc(270 / #{$base_number + 40} * 100%);
  margin-top: calc(40 / #{$base_number + 40} * 100%);
  margin-left: calc(40 / #{$base_number + 40} * 100%);
  background-color: #fff;
  color: rgba($text_color_main, .8);

  @include mq() {
    overflow: hidden;
    margin-top: calc(30 / #{$base_number_sp} * 100vw);
    margin-left: 0;
  }

  &:hover {
    color: $color_accent;
  }
}

.contents {
  padding: 20px 20px 0;

  @include mq() {
    overflow: hidden;
    padding: calc(20 / #{$base_number_sp} * 100vw) calc(20 / #{$base_number_sp} * 100vw) 0;
  }
}

.label {
  display: inline-block;
  padding: 2px 12px 3px;
  background-color: #9e4620;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  @include mq() {
    padding: calc(2 / #{$base_number_sp} * 100vw) calc(16 / #{$base_number_sp} * 100vw);
    font-size: calc(20 / #{$base_number_sp} * 100vw);
  }
}

.date {
  display: inline-block;
  margin-left: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  @include mq() {
    margin-left: calc(10 / #{$base_number_sp} * 100vw);
    font-size: calc(20 / #{$base_number_sp} * 100vw);
  }
}

.title {
  margin-top: 10px;
  font-weight: bold;
  @include mq() {
    margin-top: calc(4 / #{$base_number_sp} * 100vw);
    font-size: calc(24 / #{$base_number_sp} * 100vw);
    line-height: 1.3;
  }
}

.description {
  padding: 5px 20px 20px;
  font-size: 1.2rem;
  @include mq() {
    clear: left;
    padding: calc(15 / #{$base_number_sp} * 100vw) calc(20 / #{$base_number_sp} * 100vw) calc(20 / #{$base_number_sp} * 100vw);
    font-size: calc(22 / #{$base_number_sp} * 100vw);
  }
}

.image {
  overflow: hidden;
  height: 150px;
  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  @supports (object-fit: cover) {
    > img {
      position: static;
      top: auto;
      left: auto;
      width: 100%;
      height: 100%;
      object-fit: cover;
      -webkit-transform: none;
      transform: none;
    }
  }
  @include mq() {
    float: left;
    width: calc(270 / #{$base_number_sp} * 100vw);
    height: calc(150 / #{$base_number_sp} * 100vw);
  }

}

a {
  &:hover {
    text-decoration: none;

    .image {
      > img {
        transform: scale(1.05);
      }
    }
  }
}

</style>
