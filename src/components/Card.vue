<template>
    <div v-for="item in cardList" :key="item" class="wrap_card">
        <div class="pic">
            <img :src="item.cardPic + item.id" >
        </div>
        <div  class="title">
            {{item.title}}
            <!-- 標題 -->
        </div>
        <div class="txt">
            {{item.txt}}
            <!-- 文字文字文字文字 -->
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    data(){
        return {
            cardList: [
                {id:1, cardPic: 'https://picsum.photos/200/100/?random=', title: "標題一", txt: "媽的文字啦"},
                {id:2, cardPic: 'https://picsum.photos/200/100/?random=', title: "標題二", txt: "煩死了人啦"},
                {id:3, cardPic: 'https://picsum.photos/200/100/?random=', title: "標題三", txt: "肚子痛肚子餓"}
            ],
            cardPic: 'https://picsum.photos/200/100/?random=',
            // count: 3,
            title: "這是標題",
            txt: "文字文字文字文字"
        }
    }
}
</script>