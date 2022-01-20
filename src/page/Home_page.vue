<template>
  <div>
<Home_banner/>
    <Movie/>
    <Details_movie/>
  </div>
</template>

<script>
import Home_banner from "@/components/Home_banner";
import Movie from "@/components/Movie";
import Details_movie from "@/page/Details_movie";
export default {
  name: "Home_page",
  components: {
    Home_banner,Movie,Details_movie
  }

}
</script>

<style>

</style>