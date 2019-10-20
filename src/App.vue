<template>
    <body>
        <section>
            <nav class="banner">
                <h1>飯野鉄工所</h1>
                <ul>
                    <li v-for="item in items" :key="item.id" >
                        <a class="menuLink" v-bind:href="'#'+item.idName" @click="clickSmoothScroll('#'+item.idName)">{{ item.message }}</a>
                    </li>
                </ul>
            </nav>
        </section>

        <router-view />

        <section>
            <div class="inquiryDiv">
                <h3 class="inquiryName" id="inquiryName">お問合せ</h3>
                <p class="inquirySubtitle">採用についてはこちらから</p>
                <div class="inquiryDetails">
                    <h4>電話番号</h4>
                    <p>０９４９ー２２ー３５５１</p>
                    <h4>FAX</h4>
                    <p>０９４９ー２４ー２４５８</p>
                    <h4>営業日</h4>
                    <p>土日祝日を除く、平日９時から１７時</p>
                </div>
            </div>
        </section>

        <footer class="footerImg" :style="footerImg">
            <div class="row">
                <div class="footerContents">
                    <div class="footerCompanyName">
                        <h1>飯野鉄工所</h1>
                    </div>
                    <div class="footerDetails">
                        <p>〒822-0034<br>福岡県直方史大字山部1288</p>
                        <p>TEL : 0949-22-3551</p>
                        <p>FAX : 0949-24-2458</p>
                    </div>
                </div>
                <div class="footerContents2">
                    <ul class="footerDetails2">
                        <li v-for="item in items" :key="item.id" v-bind:href="'#'+item.idName" @click="clickSmoothScroll('#'+item.idName)"><h4>{{ item.message }}</h4></li>
                    </ul>
                </div>
            </div>
        </footer>

        <section>
            <div class="row rightReserved">
                <p>© 2019 Iino Iron Works All rights reserved</p>
            </div>
        </section>
    </body>
</template>

<script>
  import Top from "./top.vue";

  export default {
  data: function() {
   return {
    items: [
      { message: '会社沿革', idName: 'historyName'},
      { message: '製品情報',idName: 'productionName'},
      { message: '採用情報',idName: 'recruitName'},
      { message: '会社概要',idName: 'companyName'},
      { message: 'アクセス',idName: 'mapName'},
      { message: 'お問合せ',idName: 'inquiryName'},
    ],
    historyImg: {
        'backgroundImage' : 'linear-gradient( #161616ab, #474747ab)' + ',' +'url(' + require("./assets/history.png") + ')'
    },
    productionImg: {
        'backgroundImage' : 'linear-gradient( #161616ab, #474747ab)' + ',' +'url(' + require("./assets/production.png") + ')'
    },
    recruitImg: {
        'backgroundImage' : 'linear-gradient( #161616ab, #474747ab)' + ',' +'url(' + require("./assets/recruit.png") + ')'
    },
    footerImg:{
        'backgroundImage' : 'linear-gradient( #161616ab, #474747ab)' + ',' +'url(' + require("./assets/footer.png") + ')'
    }
   }
  },
  methods: {
    clickSmoothScroll (idName) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(idName),
        500,
        null,
        null,
        'y'
      )
    }
  }
 }
</script>

<style>
@import "./iino.css";
</style>
