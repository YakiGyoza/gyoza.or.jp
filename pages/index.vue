<template>
  <article class="contents">
    <TaglineArea />
    <MainVisual />
    <NewsArea />
    <AboutArea />
    <EntryArea />
    <ProjectArea />
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
  }
}
</script>

<style lang="scss" scoped>
.contents {
	position: relative;

	@media only screen and (max-width: $point_sp) {
		padding-top: calc(170 / #{$base_number_sp} * 100vw);
	}
}
</style>
