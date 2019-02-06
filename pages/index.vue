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
        order: '-fields.publishDate',
        'limit': 3
      }),
      // projects
      client.getEntries({
        'content_type': 'projects',
        locale: 'ja',
        order: '-fields.publishDate',
        'limit': 3
      })
    ]).then(([topics, projects]) => {
      return {
        topics:   topics.items,
        projects: projects.items,
      }
    }).catch(console.error)
  },
  mounted () {
    !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/8d4d00ca3be745bbc90666b5d/87073b737a4afdd7fa89ebdd1.js");
  },
}
</script>

<style lang="scss" scoped>
.contents {
	position: relative;
}
</style>
