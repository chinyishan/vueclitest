<template>
    <main>
        {{info}}
        <button @click="add">+</button>
        {{childNum}}
        <button @click="reduse">-</button>
        {{info}}
    </main>
</template>

<script>
export default {
    props: ["info", "count"],
    data() {
        return {
            childNum: 0
        }
    },
    methods: {
        add() {
            this.childNum +=1
        },
        reduse() {
            this.childNum -=1
        },
        modify() {
            this.$emit('numadd', this.childNum )
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
