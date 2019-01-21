<template>
  <section class="area-common -project">
    <div class="wrap">
      <h2 class="headline -project"><span>プロジェクト</span></h2>
      <div class="column-project">
        <EntryCard
          v-for="(post, key, index) in projects"
          :key="index"
          :id="post.sys.id"
          :image="post.fields.heroImage"
          :title="post.fields.title"
          :description="post.fields.description"
          :publishDate="post.fields.publishDate">
        </EntryCard>
      </div>
      <!-- <div class="area-common__btn"><a href="#" class="btn -default">過去のプロジェクトをすべてみる</a></div> -->
    </div>
  </section>
</template>

<script>
import EntryCard from '~/components/Entry/ProjectTop.vue'

export default {
  components: {
    EntryCard,
  },
  props: {
    projects: {
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
.column-project {
  display: flex;
	flex-flow: wrap;
	justify-content: space-between;
	max-width: $base_width - 60px;
	margin-right: auto;
	margin-left: auto;
	margin-top: -5px;

	@media only screen and (max-width: $point_sp) {
    max-width: none;
		margin-top: calc(-40 / #{$base_number_sp} * 100vw);
	}
}
</style>
