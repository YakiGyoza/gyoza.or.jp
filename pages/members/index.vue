<template>
  <article id="members">
    <section class="visual-main">
      <div class="wrap">
        <div class="visual-main__contents">
          <h1 class="visual-main__headline">焼き餃子協会　法人賛助会員・特別会員の皆様</h1>
        </div>
      </div>
    </section>


    <div class="area-common">
      <div class="wrap">

        <article>
        <h2>法人賛助会員のご紹介</h2>
        <div class="note">（敬称略、累計賛助会費総額順）</div>
        <div class="company">
          <h3>
            <img src="/assets/img/members/gyouza-houei.jp.jpg" alt="ぎょうざの宝永" /><br />
            有限会社ぎょうざの宝永
          </h3>
          <div class="comment">
            <h4>焼き餃子協会によるご紹介</h4>
            <p>
              ジューシーでパンチのある餡が、しっかりしたもちもちな皮に包まれた餃子が特徴。<br>
              北海道の美味しい食材を中心に国産食材が使われています。
            </p>
            <div class="privilege">★個人賛助会員への通販特典あり★</div>
          </div>
          <a href="https://www.gyouza-houei.jp/" target="_blank"></a>
        </div>
        <div class="company">
          <h3>
            <img src="/assets/img/members/eat-and.jp.jpg" alt="イートアンド株式会社" /><br />
            イートアンド株式会社
          </h3>
          <div class="comment">
            <h4>焼き餃子協会によるご紹介</h4>
            <p>
              大阪王将を展開し、店舗とスーパーマーケットで全国トップクラスに餃子を製造し販売している会社。<br>
              ふたも油も水もいらない簡単調理の羽根つき餃子など、焼き餃子を革命し続けています。
            </p>
          </div>
          <a href="https://www.eat-and.jp/" target="_blank"></a>
        </div>
        <div class="company">
          <h3>
            <img src="/assets/img/members/itsuji.co.jp.jpg" alt="井辻食産株式会社" /><br />
            井辻食産株式会社
          </h3>
          <div class="comment">
            <h4>焼き餃子協会によるご紹介</h4>
            <p>
              西日本最大の餃子皮メーカーでありながら、広島市内に餃子専門店「餃子家龍」を次々と展開。<br />
              広島県の食材を生かしたユニークで美味しい餃子を多数開発しています。
            </p>
            <div class="privilege">★個人賛助会員への通販割引あり★</div>
          </div>
          <a href="https://www.itsuji.co.jp/" target="_blank"></a>
        </div>
        <div class="company">
          <h3>
            <img src="~/assets/img/members/tentus.jp.png" alt="株式会社テンタス" /><br />
            株式会社テンタス
          </h3>
          <div class="comment">
            <h4>焼き餃子協会によるご紹介</h4>
            <p>
              デジタルプロモーションを行う仲間のために、勉強会と餃子の会を開催。<br />
              焼き餃子協会がセレクトした餃子が、様々な立場の方々の交流のきっかけになっています。
            </p>
          </div>
          <a href="https://tentus.jp/" target="_blank"></a>
        </div>
      </article>

      <article>
        <h2>特別会員のご紹介</h2>
        <div class="note">（登録順）</div>

        <ul class="list">
          <li>
            <span class="name">木村 拓也 様</span>
            <span class="occupation">アナウンサー</span>
          </li>
          <li>
            <span class="name">恒吉 浩之 様</span>
            <span class="occupation">宮崎ストリート餃子フェス プロデューサー</span>
          </li>
        </ul>

      </article>

      </div>
    </div>
    <hr />
    <EntryArea />
  </article>
</template>

<script>
import EntryArea from '~/components/EntryArea.vue'
export default {
  components: {
    EntryArea,
  },
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

h2 {
  text-align: center;
  font-size: 3rem;
  border-top: 2px solid #ae3b0b;
  border-bottom: 2px solid #d6cbbb;
}
h3 {
  font-size: 2rem;
}
.note {
  font-size: 0.9rem;
  text-align: center;
}
.company {
  text-align: center;
  margin: 2vh auto;
  padding: 2vh 0;
  width: 50vw;
  position: relative;
}
.company img {
  max-height: 20vh;
  margin: 2vh auto;
}
.company a {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.company a:hover {
  opacity:0.4;
  background: #fff;
}
.comment {
  margin: 1em 0;
  font-size: 0.9em;
}
.privilege {
  background-color: #ae3b0b;
  color: #fff;
  padding: 0.5em;
  margin-top: 0.5em;
}

.list {
  width: 50vw;
  margin: 0 auto;
}
.name {
  font-size: 2rem;
  margin-top: 0.5em;
}
.occupation {
  font-size: 1.4rem;
}

@media only screen and (max-width: $point_sp) {
  .company, .list {
    width: 100%;
  }
}

</style>
