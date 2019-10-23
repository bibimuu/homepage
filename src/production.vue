<template>
    <div>
        <section>
            <div class="productionDiv row">
                <h3 class="productionName" id="productionName">製品情報</h3>
                    <p class="productionInfo">
                    当社の製品は自動車などのモーターや半導体のリードフレームの金型、工作機の部品などに使われています。分野は様々ですが、
                    焼き入れなどを施し硬度が上がった丸い金属を精密に研磨することを得意としています。
                    </p>
                <div class="productionImgs">
                    <div class="productionImg1" :style="firstProductionImg"></div>
                    <div class="productionImg2" :style="secondProductionImg"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data: function() {
   return {
    firstProductionImg: {
        'backgroundImage' :'url(' + require("./assets/productionPhoto1.png") + ')'
    },
    secondProductionImg: {
        'backgroundImage' :'url(' + require("./assets/productionPhoto2.png") + ')'
    }
   }
  },
}
</script>

<style scoped>
.productionDiv{
    padding-top: 200px;
    height: 700px;
    position: relative;
}

.productionName {
    position: absolute;
    top: 13%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.productionInfo{
    font-size: 55%;
    letter-spacing: 4px;
    text-align: center;
    width: 70%;
    margin: 10px auto;
}

.productionImgs {
    width:80%;
    margin: 0 auto;
}

.productionImg1 {
    text-align: left;
}

.productionImg2 {
    text-align: right;
}

.productionImg1,
.productionImg2 {
    height: 250px;
    width: 30%;
    background-size: cover;
    background-position: center;
    margin: 35px 10%;
    display: inline-block;
}
    
</style>