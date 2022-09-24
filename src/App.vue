<template>
  <nav>
    <router-link 
    v-for= "item in pageRoutes"
    :key="item.path"
    :to="item.path">
    {{item.chName? item.chName: item.name}}</router-link> |
    <!-- <router-link to="/about">About</router-link> |
    <router-link to="/shop">新增shop</router-link> |
    <router-link to="/report">營火報告</router-link> -->
  </nav>

  <!-- <router-link :to="{
    name: 'shop',
    params: {
      productID: 1
    }
  }"> 商品1 </router-link> -->

  <router-link 
    v-for="item in 10"
    :key="item"
    :to="{
      name: 'shop',
      params: {
        productID: item
      }
    }">
      商品({{item}}
  </router-link>

  <router-view/>
</template>

<script>
  import {routes} from '@/router/index.js'
  console.log(routes);
  export default {
    data() {
      return {
        //routes: routes
        //省略寫法
        routes,
      }
    },
    computed: {
      pageRoutes(){
        //const route = this.routes.filter(item)

        const route = this.routes.filter(item => item.name)
        return route
      }
    }
  }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
