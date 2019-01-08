<template>
  <div class="contents" v-if="post">

    <section class="visual-main">
      <div class="wrap">
        <div class="visual-main__contents">
          <h1 class="visual-main__headline">{{ post.fields.title }}</h1>
          <p class="date">{{ post.sys.createdAt | date }}</p>
        </div>
      </div>
    </section>

    <div class="image">
      <img :src="post.fields.heroImage.fields.file.url||dummyImage" alt="" />
    </div>

    <div class="area-common">
      <div class="wrap">
        <div class="body" v-html="$md.render(post.fields.body)"></div>
      </div>
    </div>

    <ContactArea id="contact" />
    <SitemapArea id="sitemap" />

 </div>
</template>

<script>
import formatDate from 'date-fns/format'
import { createClient } from '~/plugins/contentful.js'

import ContactArea from '~/components/ContactArea.vue'
import SitemapArea from '~/components/SitemapArea.vue'

const client = createClient()

export default {
  data() {
    return {
      dummyImage: require('~/assets/img/dummy.jpg')
    }
  },
  filters: {
    date: function (value) {
      if ( !value ) value = 0
      const d = new Date( value )
      return formatDate( d, 'YYYY/MM/DD' )
    },
  },
  validate ({ params }) {
    return /^[0-9a-zA-Z]+$/.test(params.id)
  },
  asyncData ({ params }) {
    return client
    .getEntry(params.id)
    .then(entrie => {
      return {
        post: entrie
      }
    })
    .catch(console.error)
  },
  components: {
    ContactArea,
    SitemapArea,
  },
}
</script>

<style lang="scss" scoped>
.visual-main {
	background: #a32a00 url(/assets/img/common/visual-main_bg@pc.png) center center no-repeat;
	background-size: cover;
	color: #fff;
	text-align: center;

	&__contents {
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		justify-content: center;
		height: 181px;
    @include mq() {
      height: calc(180 / #{$base_number_sp} * 100vw);
    }
	}
}

h1 {
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  @media only screen and (max-width: $point_sp) {
    font-size: calc(40 / #{$base_number_sp} * 100vw);
  }
}

.body {
  font-size: 1.6rem;
}

</style>
