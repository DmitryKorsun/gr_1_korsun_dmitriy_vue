<template>
  <div id="app">
    <Header />
    <Home_page/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Home_page from "@/page/Home_page";
export default {
  name: 'App',
  components: {
    Header,Home_page
  }
}
</script>

<style>
#app {
/*  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color:antiquewhite;
  height: 100vh;
}
</style>
