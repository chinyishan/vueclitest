<template>
  <div class="home">
    <!-- <img src="../assets/logo.png" alt="Vue logo">
    <HelloWorld msg="HI" :title="'hello~~~~~'"/> -->
    <MainItem
    :info="title"
    :count="parentNum"
    @unmounted="numAddOne"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import MainItem from '@/components/MainItem.vue';

export default {
  components: {
    HelloWorld,
    MainItem
  },
  data() {
    return {
      title: "AA",
      parentName: 0
    }
  },
  methods: {
    numAddOne(val){
      this.parentNum += val
    }
  }
}
</script>
