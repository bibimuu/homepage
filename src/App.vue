<template>
    <body>
    <header :style="topImgStyle">
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
        <div class="row IntroColums">
            <div class="historyColums">
                <h2>会社沿革</h2>
                <p class="historyComment">
                    伝統的な技術を武器に新時代のものづくりに挑みつづける 飯野鉄工所。今、私たちはさらなる未来を見据え、豊かな 発想とエネルギーあふれる人材を求めています。 さあ、この会社を舞台に力いっぱい輝く自身の姿を想像してみてください。
                </p>
            </div>
            <div class="historyPhoto" :style="historyImg">
                <h2>会社沿革</h2>
            </div>
            <div class="productionPhoto" :style="productionImg">
                <h2>製品紹介</h2>
            </div>
            <div　class="productionColums">
                <h2>製品紹介</h2>
                <p class="productionComment">
                    伝統的な技術を武器に新時代のものづくりに挑みつづける 飯野鉄工所。今、私たちはさらなる未来を見据え、豊かな 発想とエネルギーあふれる人材を求めています。 さあ、この会社を舞台に力いっぱい輝く自身の姿を想像してみてください。
                </p>
            </div>
        </div>
    </section>

    
    </body>
</template>

<script>
  export default {
  data: function() {
   return {
    items: [
      
      { message: '会社沿革'},
      { message: '製品情報'},
      { message: '採用情報'},
      { message: '福利厚生'},
      { message: '会社概要'},
      { message: 'アクセス'},
      { message: 'お問合せ'},
    ],
    topImgStyle: {
     'backgroundImage' : 'url(' + require("./assets/header.png") + ')'
    } ,
    historyImg: {
        'backgroundImage' : 'url(' + require("./assets/history.png") + ')'
    },
    productionImg: {
        'backgroundImage' : 'url(' + require("./assets/production.png") + ')'
    }
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
