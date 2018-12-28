<template>
  <div class="contents">
    <section class="visual-main">
      <div class="wrap">
        <div class="visual-main__contents">
          <h1 class="visual-main__headline">お知らせ</h1>
        </div>
      </div>
    </section>
    <div class="area-common">
      <div class="wrap">
        <EntryNavi />
        <div class="column-news">
          <EntryCard
            v-for="(post, key, index) in posts"
            :key="index"
            :id="post.sys.id"
            :image="post.fields.heroImage"
            :title="post.fields.title"
            :description="post.fields.description"
            :type="post.sys.contentType.sys.id"
            :createdAt="post.sys.createdAt">
          </EntryCard>
        </div>

        <EntryPagination  class="paging" />

      </div>
    </div>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import EntryCard from '~/components/Entry/Card.vue'
  import EntryNavi from '~/components/Entry/Navi.vue'
  import EntryPagination from '~/components/Entry/Pagination.vue'

  const client = createClient()

  export default {
    // `env` is available in the context object
    asyncData ({env}) {
      return Promise.all([
        client.getEntries({
//          'content_type': 'topics',
          locale: 'ja',
          order: '-sys.createdAt',
          'limit': 10
        })
      ]).then(([posts]) => {
        return {
          posts: posts.items
        }
      }).catch(console.error)
    },
    components: {
      EntryCard,
      EntryNavi,
      EntryPagination,
    }
  }
</script>

<style lang="scss" scoped>
h1 {
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  @media only screen and (max-width: $point_sp) {
    font-size: calc(40 / #{$base_number_sp} * 100vw);
  }
}

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
		height: 200px;
    @include mq() {
      height: calc(180 / #{$base_number_sp} * 100vw);
    }
	}
}

.column-news {
	display: flex;
	flex-flow: wrap;
	margin-top: calc(-40 / #{$base_number} * 100%);
	margin-left: calc(-40 / #{$base_number} * 100%);
  @include mq() {
    display: block;
		margin-top: calc(30 / #{$base_number_sp} * 100vw);
		margin-left: 0;
  }

}

.paging {
	margin-top: 60px;
  @include mq() {
    margin-top: calc(60 / #{$base_number_sp} * 100vw);
  }
}

</style>
