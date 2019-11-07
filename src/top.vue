<template>
<div>
    <header class="top" :style="topImgStyle">
            <div>
                <p class="commentOnPhoto">人を大切にする鉄工所</p>
            </div>
    </header>

    <section>
        <div class="IntroColums">
            <div class="historyColums">
                <h3 class="historyName" id="historyName">会社沿革</h3>
                <p class="historyComment">
                    飯野鉄工所は、100年を超える歴史のある鉄工所です。飯野鉄工所の創業から現在に至るまでの沿革はこちらからご覧できます。
                </p>
                <h2><router-link class="router-link" to="/History">会社沿革</router-link></h2>
            </div>

            <div class="historyPhoto" :style="historyImg">
                <div class="triangle1"></div>
            </div>

            
                <div class="productionPhoto" :style="productionImg">
                </div>

                <div class="productionColums">
                    <h3 class="productionName" id="productionName">製品紹介</h3>
                    <p class="productionComment">
                        自動車などのモーターや半導体のリードフレームの金型、工作機の部品など、飯野鉄工所は、独自の技術と発想でユーザーの皆様の生産性向上、イノベーションを支える製品を生み出し続けています。
                    </p>
                    <h2><router-link class="router-link" to="/Production">製品紹介</router-link></h2>
                </div>
            
        </div>
    </section>

    <section class="recruitPhoto" :style="recruitImg">
        <div>
            <h3 class="recruitName" id="recruitName">採用情報</h3>
            <p class="recruitComment">
                伝統的な技術を武器に新時代のものづくりに挑みつづける飯野鉄工所。今、私たちはさらなる未来を見据え、豊かな 発想とエネルギーあふれる人材を求めています。 さあ、この会社を舞台に力いっぱい輝く自身の姿を想像してみてください。
            </p>
            <h2 class="recruitButton"><router-link class="router-link" to="/Recruit">採用情報</router-link></h2>
        </div>
    </section>

    <section>
        <div class="row companyDiv">
            <h3 class="companyName" id="companyName">会社概要</h3>
            <table class="companyDetails">
                <tbody class="tableSeparate1">
                    <tr>
                        <th>会社名</th>
                        <td>有限会社 飯野鉄工所</td>
                    </tr>
                    <tr>
                        <th>代表者</th>
                        <td>飯野泰造</td>
                    </tr>
                    <tr>
                        <th>住所</th>
                        <td>〒822-0034<br>福岡県直方史大字山部1288</td>
                    </tr>
                    <tr>
                        <th>TEL/FAX</th>
                        <td>0949-22-3551/<br>0949-24-2458</td>
                    </tr>
                </tbody>
                <tbody class="tableSeparate2">
                    <tr>
                        <th>資本金</th>
                        <td>300万円</td>
                    </tr>
                    <tr>
                        <th>設立</th>
                        <td>1897年</td>
                    </tr>
                    <tr>
                        <th>社員数</th>
                        <td>21人（パートを含む）</td>
                    </tr>
                    <tr>
                        <th>主要取引先</th>
                        <td>株式会社三井ハイテック、株式会社安川電機、日本電産株式会社</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section>
        <div class="mapDiv">
            <h3 class="mapName" id="mapName">アクセス</h3>
            <div class="imgMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.0309738351766!2d130.72044071520673!3d33.73401518069375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543d1671d9b1241%3A0xae1b2b5cff65ed99!2z44CSODIyLTAwMzQg56aP5bKh55yM55u05pa55biC5aSn5a2X5bGx6YOo77yR77yS77yY77yY!5e0!3m2!1sja!2sjp!4v1569838213110!5m2!1sja!2sjp" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>
            <div class="mapComment">
                <h4>住所</h4>
                <p>	〒822-0034<br>
                    福岡県直方史大字山部1288</p>
                <h4>電車でお越しの方</h4>
                <p>平成筑豊鉄道伊田線 南直方御殿口駅 徒歩約１０分<br>
                    筑豊本線 勝野駅 徒歩約１３分<br>
                    平成筑豊鉄道伊田線 あかぢ駅 徒歩約１７分
                </p>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
  data: function() {
   return {
    topImgStyle: {
     'backgroundImage' : 'linear-gradient(#1f1d1dc9,#2c2b2b7c)' + ',' + 'url(' + require("./assets/header.png") + ')'
    },
    historyImg: {
        'backgroundImage' : 'linear-gradient( #161616ab, #474747ab)' + ',' +'url(' + require("./assets/history.png") + ')'
    },
    productionImg: {
        'backgroundImage' : 'linear-gradient( #161616ab, #474747ab)' + ',' +'url(' + require("./assets/production.png") + ')'
    },
    recruitImg: {
        'backgroundImage' : 'linear-gradient( #161616ab, #474747ab)' + ',' +'url(' + require("./assets/recruit.png") + ')'
    }
   }
  }
 }
</script>

