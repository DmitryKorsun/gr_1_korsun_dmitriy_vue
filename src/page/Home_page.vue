<template>
  <div>
    <Banner/>
    <Movie/>
    <Details_movie/>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Movie from "@/components/Movie";
import Details_movie from "@/page/Details_movie";
export default {
  name: "Home_page",
  components: {
    Banner,Movie,Details_movie
  }

}
</script>

<style>

</style>