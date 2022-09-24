<template>
    <main>
        {{count}}
        <el-button @click="count += 1" type="primary">新增照片</el-button>
        <img v-for="item in count" :src="imgURL + item" :key="item">
    </main>
</template>

<script>
export default {
    name: "ImageItem",
    
    data(){
        return {
            imgURL: 'https://picsum.photos/200/100/?random=',
            count: 5
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
