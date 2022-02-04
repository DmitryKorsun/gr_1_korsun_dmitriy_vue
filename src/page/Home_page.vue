<template>
  <div>
    <Banner/>
    <Movie :key="movie.id" :type="movie.type" :description="movie.description" v-for="movie in movies"/>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Movie from "@/components/Movie";

export default {
  name: "Home_page",
  components: {
    Movie, Banner
  },
  computed: {
    movies() {
      return [
        {id: 1, type: 's=matrix', description: 'Матрица'},
        {id: 2, type: 's=spider', description: 'Человек Паук'},
        {id: 3, type: 's=avengers', description: 'Мстители'},
        {id: 4, type: 's=Batman', description: 'Бетмен'},
      ]
    }
  }

}
</script>

<style>

</style>