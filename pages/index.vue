<template>
  <article class="contents">
    <MainVisual />
    <TaglineArea />
    <NewsArea id="news" :topics="topics" />
    <AboutArea　id="about" />
    <EntryArea id="entry" />
    <ProjectArea id="project" :projects="projects" />
  </article>
</template>

<script>
import TaglineArea from '~/components/TaglineArea.vue'
import MainVisual from '~/components/MainVisual.vue'
import NewsArea from '~/components/NewsArea.vue'
import AboutArea from '~/components/AboutArea.vue'
import EntryArea from '~/components/EntryArea.vue'
import ProjectArea from '~/components/ProjectArea.vue'

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
