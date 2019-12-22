<template>
    <body>
        <section>
                <div class="banner">
                    <div class="header__menu">
                        <div class="header__menu__line" @click="naviOpen()" :class="{'is-active': isNaviOpenSp}">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <h1><router-link class="router-link-Home" to="/">飯野鉄工所</router-link></h1>
                    <transition name="navi">
                        <div v-show="isNaviOpenSp">
                            <ul class="navi__wrap">
                                <li v-for="item in items" :key="item.id" >
                                    <a class="menuLink" v-bind:href="'/#'+item.idName" @click="clickAction(item)">{{ item.message }}</a>
                                </li>
                            </ul>
                        </div>
                    </transition>
                    <div class="isNaviOpenPc">
                        <ul class="navi__wrap">
                            <li v-for="item in items" :key="item.id" >
                                <a class="menuLink" v-bind:href="'/#'+item.idName" @click="clickAction(item)">{{ item.message }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
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
                <div class="footerContents2">
                    <ul class="footerDetails2">
                        <li v-for="item in items" :key="item.id"><a class="menuLink" v-bind:href="'/#'+item.idName" @click="clickAction(item)">{{ item.message }}</a></li>
                    </ul>
                </div>
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

  export default {
  data: function() {
   return {
    isNaviOpenSp: false,
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
    clickAction(item) {
        if (this.$route.path !== '/') {
            return;
        }
        this.clickSmoothScroll(item)
        this.isNaviOpen = false //true or falseを変えてv-showを操る
    },
    clickSmoothScroll (item) {
      const idName = '#'+item.idName
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(idName),
        500,
        null,
        null,
        'y'
      )
    },
    naviOpen () {
      this.isNaviOpenSp = !this.isNaviOpenSp;
    }
  }
 }
</script>

<style>
@import "./iino.css";
@import "./responsive.css";
</style>
