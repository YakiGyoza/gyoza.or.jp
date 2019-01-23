<template>
  <div class="contents" v-if="post">
    <HeroImage
        :image="this.post.fields.heroImage.fields.file.url"></HeroImage>
    <EntryHeader
          :title="post.fields.title"
          :description="post.fields.description"
          :type="post.sys.contentType.sys.id"></EntryHeader>
    <div class="wrap">
      <EntryLabel :types="post.fields.type"></EntryLabel>
    </div>
    <div class="wrap" v-if="post.fields.startDate">
      <EventDate :startDate="post.fields.startDate" :endDate="post.fields.endDate"></EventDate>
    </div>
    <div class="wrap">
      <EntryBody :body="post.fields.body"></EntryBody>
    </div>
    <div class="wrap" v-if="post.fields.link">
      <div class="link">
        <h2>LINK</h2>
        <nuxt-link class="button" to="post.fields.link">{{ post.fields.link }}</nuxt-link>
      </div>
    </div>
    <div class="wrap">
      <div class="footer">
        公開日時 {{ post.sys.createdAt | date }}<br />
        更新日時 {{ post.sys.updatedAt | date }}
      </div>
    </div>
 </div>
</template>

<script>
import formatDate from 'date-fns/format'

import EntryHeader from '~/components/Entry/Header.vue'
import EntryBody from '~/components/Entry/Body.vue'
import EntryLabel from '~/components/Entry/Label.vue'
import EventDate from '~/components/Entry/EventDate.vue'
import HeroImage from '~/components/Entry/HeroImage.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  validate ({ params }) {
    return /^[0-9a-zA-Z]+$/.test(params.id)
  },
  head () {
    return {
      title: this.post.fields.title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.post.fields.title },
        { hid: 'description', name: 'description', content: this.post.fields.description },
        { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
      ],
    }
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
    EntryHeader,
    EntryBody,
    EntryLabel,
    EventDate,
    HeroImage,
  },
  filters: {
    date: function (value) {
      if (!value) return '';
      const d = new Date(value);
      return formatDate(d, 'YYYY/MM/DD HH:mm');
    },
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  margin: 1em auto;

}
.link {
  background: #fff;
  color: #000;
  font-size: 1.8rem;
  padding: 1em;
}
.footer {
  text-align: right;
}
</style>
