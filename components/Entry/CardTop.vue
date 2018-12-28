<template>
  <div class="item">
    <nuxt-link :to="{ name: 'posts-id', params: { id: id }}">
      <div class="image"><img :src="image | imageSrc" alt="" /></div>
      <div class="contents">
        <dl>
          <dt>{{ createdAt | date }}</dt>
          <dd>{{ title }}</dd>
        </dl>
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
    createdAt: {
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
      return image.fields.file.url + '?h=540';
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  flex-basis: calc(270 / #{$base_number + 40} * 100%);
  margin-top: calc(40 / #{$base_number + 40} * 100%);
  margin-left: calc(40 / #{$base_number + 40} * 100%);

  @include mq() {
    margin-top: calc(40 / #{$base_number_sp} * 100vw);
    margin-left: 0;
  }

  &:hover {
    .image {
      img {
        transform: scale(1.08);
      }
    }
  }

  a {
    display: block;
  }

}

.image {
  overflow: hidden;
}

.contents {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 15px 20px;
  background-color: rgba($color_main, .7);
  color: #fff;

  dd {
    margin-top: 5px;
    font-size: 1.6rem;
    font-weight: bold;
  }

  @include mq() {
    @include vw('padding', 30);
    @include vw('padding-bottom', 20);

    dt {
      @include vw('font-size', 28);
    }
    dd {
      @include vw('margin-top', 10);
    }
  }
}

</style>
