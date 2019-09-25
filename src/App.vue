<template>
    <body>
    <header>
        <div>
            <nav class="barner">
                <h1>飯野鉄工所</h1>
                <ul>
                    <li v-for="item in items" :key="item.id">{{ item.message }}</li>
                </ul>
            </nav>
            <p class="commentOnPhoto">
                人を大切にする鉄工所
            </p>
        </div>
    </header>

    <section>
        <div class="row">
            <p class="commentInInfo">
                120年の歴史がある鉄工所です。
            </p>
            <h2>会社情報</h2>
        </div>
    </section>

    <section class="newSection">
        <div class="row recruitColums">
            <p class="firstColums">採用情報</p>
            <p>
                伝統的な技術を武器に新時代のものづくりに挑みつづける 飯野鉄工所。今、私たちはさらなる未来を見据え、豊かな 発想とエネルギーあふれる人材を求めています。 さあ、この会社を舞台に力いっぱい輝く自身の姿を想像してみてください。
            </p>
        </div>
        <div class="row materialColums">
            <p class="secondColums">製品紹介</p>
            <p>
                伝統的な技術を武器に新時代のものづくりに挑みつづける 飯野鉄工所。今、私たちはさらなる未来を見据え、豊かな 発想とエネルギーあふれる人材を求めています。 さあ、この会社を舞台に力いっぱい輝く自身の姿を想像してみてください。
            </p>
        </div>
    </section>
    </body>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

  export default {
  data: function() {
   return {
    items: [
      { message: '会社情報' },
      { message: '募集要項' },
      { message: '福利厚生' },
      { message: 'お問合せ' },
    ]
   }
  }
 }
</script>

<style>
@import "iino/iino.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
