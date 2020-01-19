<template>
    <div>
        <section>
            <div class="historyDiv row">
                <h3 class="historyName" id="historyName">会社沿革</h3>
                <table class="historyTable">
                <tr><th>明治30年</th> <td>初代飯野瀧造により炭鉱関連の鉄工所として創業</td></tr>
                <tr><th>大正15年</th> <td>飯野憲一郎 代表取締役就任</td></tr>
                <tr><th>昭和42年</th> <td>飯野精一郎 代表取締役就任</td></tr>
                <tr><th>平成8年</th> <td>飯野泰造 代表取締役就任</td></tr>
                <tr><th>平成19年</th> <td>新工場竣工</td></tr>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  data: function() {
   return {
    firstImg: {
        'backgroundImage' : 'linear-gradient( #161616ab, #474747ab)' + ',' +'url(' + require("./assets/historyPhoto.png") + ')'
    }
   }
  },
 }
</script>

<style scoped>
.historyDiv{
    padding-top: 200px;
    height: 600px;
    position: relative;
}

.historyName {
    position: absolute;
    top: 13%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.historyTable{
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

.historyTable th {
    white-space: nowrap;
    background-color: rgb(237, 246, 250);
    vertical-align: top;
    font-weight: normal;
    border-bottom: 1px solid rgb(231, 229, 229);
    border-right: 1px solid rgb(231, 229, 229);
    padding: 10px 20px;
}

.historyTable td {
    vertical-align: top;
    border-bottom: 1px solid rgb(231, 229, 229);
    padding: 10px 0 10px 20px;
    text-align: left;
    display: table-cell;
}

.firstImg {
    height: 100px;
    width: 100px;
    object-fit: cover;
}

@media (max-width: 767px) {
    .historyTable td[data-v-66c4dacb] {
        vertical-align: middle;
        padding: 5px 0 5px 10px;
    }
    .historyTable[data-v-66c4dacb] {
        width: 90% !important;
    }
    .historyTable th[data-v-66c4dacb] {
        vertical-align: middle;
    }
    .historyDiv[data-v-66c4dacb] {
        height: 550px;
    }
}
@media (max-width: 480px){
    .historyDiv {
        height: 680px;
    }
}
</style>