<template>
  <div class="contents" v-if="post">
    <EntryHeader
      :title="post.fields.title"
      :description="post.fields.description"
      :type="post.sys.contentType.sys.id"
      :createdAt="post.sys.createdAt"></EntryHeader>
    <div class="area-common">
      <div class="wrap">
        <HeroImage
          :image="this.post.fields.heroImage.fields.file.url"></HeroImage>
        <EntryBody
          class="content"
          :body="post.fields.body"></EntryBody>
      </div>
    </div>
 </div>
</template>

<script>
import EntryHeader from '~/components/Entry/Header.vue'
import EntryBody from '~/components/Entry/Body.vue'
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
    HeroImage,
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 10px 0;
}
</style>
