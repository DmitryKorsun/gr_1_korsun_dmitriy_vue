<template>
  <div class="container">
    <div class="block-movie">
      <ul class="block-poster-movie">
        <li :key="movied" v-for="movied in movies">
          <img class="img-movie-poster" :src="movied.Poster" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {MoviesDataBase} from "@/baseOn";

export default {
  name: "Movies",
  data() {
    return {
      movies: [],
    }
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      try {
        const {data: {Search}} = await MoviesDataBase(`s=spy`).get(`https://omdbapi.com/?apikey=2f027767&s=spy`);
        this.movies = Search
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>

<style>
.block-movie {
  height: 100%;
}

.block-poster-movie {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 30px;
}

.block-poster-movie li {
  display: flex;
  width: 15%;
  padding-bottom: 10px;
}

.img-movie-poster {
  height: 300px;
  width: 200px;
  border-radius: 15px;
  transition: 0.5s;
  margin-bottom: 20px;
}

.img-movie-poster:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>