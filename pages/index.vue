<template>
  <article class="contents">
    <MainVisual />
    <TaglineArea />
    <NewsArea :topics="topics" />
    <AboutArea />
    <EntryArea />
    <ProjectArea :projects="projects" />
    <ContactArea />
    <SitemapArea />
  </article>
</template>

<script>
import TaglineArea from '~/components/TaglineArea.vue'
import MainVisual from '~/components/MainVisual.vue'
import NewsArea from '~/components/NewsArea.vue'
import AboutArea from '~/components/AboutArea.vue'
import EntryArea from '~/components/EntryArea.vue'
import ProjectArea from '~/components/ProjectArea.vue'
import ContactArea from '~/components/ContactArea.vue'
import SitemapArea from '~/components/SitemapArea.vue'

import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  head: {
    bodyAttrs: {
      class: 'top'
    }
  },
  components: {
    TaglineArea,
    MainVisual,
    NewsArea,
    AboutArea,
    EntryArea,
    ProjectArea,
    ContactArea,
    SitemapArea
  },
  asyncData ({env}) {
    return Promise.all([
      // topics
      client.getEntries({
        'content_type': 'topics',
        locale: 'ja',
        order: '-sys.createdAt',
        'limit': 3
      }),
      // projects
      client.getEntries({
        'content_type': 'projects',
        locale: 'ja',
        order: '-sys.createdAt',
        'limit': 3
      })
    ]).then(([topics, projects]) => {
      return {
        topics:   topics.items,
        projects: projects.items,
      }
    }).catch(console.error)
  },
}
</script>

<style lang="scss" scoped>
.contents {
	position: relative;
}
</style>
