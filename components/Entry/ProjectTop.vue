<template>
  <div class="item">
    <nuxt-link :to="{ name: 'posts-id', params: { id: id }}">
      <div class="image"><img :src="image | imageSrc" alt="" /></div>
      <div class="contents">
        <p class="label" v-for="(typeLabel, key, index) in type" :key="index">{{ typeLabel }}</p>
        <p class="date">{{ startDate | date }} <span v-if="endDate">〜 {{ endDate | date }}</span> 開催</p>
        <h3 class="headline">{{ title }}</h3>
        <div class="description">{{ description }}</div>
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
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    type: {
      type: Array,
    },
  },
  filters: {
    date: function (value) {
      if (!value) return '';
      const d = new Date(value);
      return formatDate(d, 'YYYY/MM/DD HH:mm');
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
  flex-basis: 100%;
  margin-top: 30px;
  background-color: #fff;

  a {
    display: flex;
    align-items: center;
  }

  .image {
    overflow: hidden;
    flex-basis: 100px;
    height: 100px;
  }
  .contents {
    flex: 1;
    padding: 5px 20px;
  }
  .label {
    display: inline-block;
    padding: 2px 12px 3px;
    background-color: #9e4620;
    color: #fff;
    font-size: 1.2rem;
  }
  .date {
    display: inline-block;
    margin-left: 15px;
  }
  .headline {
    margin-top: 10px;
    font-weight: bold;
  }
  .description {
    margin-top: 10px;
    font-size: 1.6rem;
  }

  &:not(:nth-child(n+3)) {
    flex-basis: calc(400 / #{$base_number - 50} * 100%);
    a {
      display: block;
    }
    .image {
      height: 200px;
      img {
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
    }

    .contents {
      padding: 22px 30px;
    }
    .label {
      padding-top: 1px;
      padding-bottom: 2px;
      font-size: 1.4rem;
      font-weight: bold;
    }
    .date {
      font-size: 1.6rem;
      font-weight: bold;
    }
    .headline {
      font-size: 1.8rem;
    }
    .description {
    }
  }

  @include mq() {
    max-width: none;
		margin-top: calc(-40 / #{$base_number_sp} * 100vw);
    &:not(:nth-child(n+3)) {
      flex-basis: 100%;
      .image {
        height: calc(280 / #{$base_number_sp} * 100vw);
      }
      .contents {
        padding: calc(30 / #{$base_number_sp} * 100vw) calc(55 / #{$base_number_sp} * 100vw);
      }
      .label {
      }
      .date {
        font-size: calc(24 / #{$base_number_sp} * 100vw);
      }
      .headline {
        font-size: calc(28 / #{$base_number_sp} * 100vw);
      }
      .description {
      }
    }
  }

  &:hover {
    text-decoration: none;
    color: $color_accent;
    img {
      transform: scale(1.05);
    }
  }
}
</style>
