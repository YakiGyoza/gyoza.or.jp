<template>
  <section id="news" class="area-common -news">
    <div class="wrap">
      <h2 class="headline -news"><span>お知らせ</span></h2>
      <div class="column-news-top">
        <EntryCard
          v-for="(post, key, index) in topics"
          :key="index"
          :id="post.sys.id"
          :image="post.fields.heroImage"
          :title="post.fields.title"
          :createdAt="post.sys.createdAt">
        </EntryCard>
      </div>
      <!--
      <div class="area-common__btn"><a href="/news/" class="btn -default">お知らせをすべてみる</a></div>
      -->
    </div>
  </section>
</template>

<script>
import EntryCard from '~/components/Entry/CardTop.vue'

export default {
  components: {
    EntryCard,
  },
  props: {
    topics: {
      type: Array,
    },
  },
}

</script>

<style lang="scss" scoped>
.column-news-top {

	display: flex;
	flex-flow: wrap;
	margin-top: calc(-40 / #{$base_number} * 100%);
	margin-left: calc(-40 / #{$base_number} * 100%);


  @include mq() {
		display: block;
		margin-top: calc(60 / #{$base_number_sp} * 100vw);
		margin-left: 0;
	}
}

</style>
