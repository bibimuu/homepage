<template>
    <div>
        <section>
            <div class="recruitDiv row">
                <h3 class="recruitName" id="recruitName">募集要項</h3>
                <table class="recruitTable">
                <tr><th>募集業種</th> <td>機械オペレーター、 一般事務</td></tr>
                <tr><th>応募資格</th> <td>高校卒業以上</td></tr>
                <tr><th>応募方法</th> <td>問い合わせからご連絡下さい</td></tr>
                <tr><th>提出書類</th> <td>履歴書</td></tr>
                <tr><th>選考方法</th> <td>面接・筆記試験</td></tr>
                <tr><th>業務内容</th> <td>【機械オペレーター】<br>旋盤、マシニングセンター、円筒研削盤などの工作機の操作。またCADを用いたNCのプログラミングなども行います。<br>【一般事務】<br>専用ソフトを用いた受発注、電話応対など</td></tr>
                </table>
            </div>
        </section>
        <section>
            <div class="recruitDiv2 row">
                <h3 class="recruitName2">福利厚生</h3>
                <table class="recruitTable">
                <tr><th>社会保険</th> <td>健康保険、厚生年金、雇用保険、労災保険</td></tr>
                <tr><th>保健管理</th> <td>健康診断 年1回</td></tr>
                </table>
            </div>
        </section>
        <section>
            <div class="inquiryDiv">
                <h3 class="inquiryName" id="inquiryName">お問合せ</h3>
                <p class="inquirySubtitle">選考に進むことを希望される方は、お電話かFAXよりご応募ください。</p>
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
    </div>
</template>

<script>
export default {
 }
</script>

<style scoped>
.recruitDiv{
    padding-top: 200px;
    height: 750px;
    position: relative;
}

.recruitName{
    position: absolute;
    top: 13%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: rgba(0, 0, 0, 0.85);
}

.recruitTable{
    letter-spacing: 4px;
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
    border-top: 1px solid rgb(231, 229, 229);
    border-left: 1px solid rgb(231, 229, 229);
    border-right: 1px solid rgb(231, 229, 229);
    font-size: 40%;
    width: 70%;
}

.recruitTable th {
    white-space: nowrap;
    background-color: rgb(237, 246, 250);
    vertical-align: top;
    font-weight: normal;
    border-bottom: 1px solid rgb(231, 229, 229);
    border-right: 1px solid rgb(231, 229, 229);
    padding: 10px 20px;
}

.recruitTable td{
    vertical-align: top;
    border-bottom: 1px solid rgb(231, 229, 229);
    padding: 10px 0 10px 20px;
    text-align: left;
    display: table-cell;
}

.recruitDiv2{
    padding-top: 110px;
    height: 430px;
    position: relative;
}
.recruitName2{
    position: absolute;
    top: 13%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: rgba(0, 0, 0, 0.85);
}

.recruitDiv2 .recruitTable th {
    text-align: center;
}
@media (max-width: 767px) {
    .recruitTable {
        width: 90%;
    }
}
@media (max-width: 480px){
    .recruitTable {
        width: 95%;
    }
}
</style>