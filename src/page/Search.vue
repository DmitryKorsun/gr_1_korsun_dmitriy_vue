<template>
<div class="container-search">
  <div class="search-block">
    <label for="search-input">Поиск:</label>
    <input v-model="typeSearch" id="search-input" type="text" placeholder="Введите что хотите найти">
    <label for="select-page">Страница:</label>
    <select v-model="value" id="select-page">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="6">5</option>
      <option value="6">6</option>
    </select>
    <button @click="getSearchMovie" >Искать</button>
  </div>
  <div class="movie-search">Найденые:</div>
  <ul class="movie-search-block">
    <li :key="movied.imdbID + Math.random()" v-for="movied in movies">
      <img @click="detailSearchMovie(movied.imdbID)" :src="movied.Poster">
    </li>
  </ul>
</div>
</template>

<script>
import {MoviesDataBase} from "@/baseOn";

export default {
  name: "Search",
  data () {
    return {
      typeSearch: '',
      movies:[],
      value:'1'
    }
  },
  methods: {
    async getSearchMovie() {
      try {
        const {data: {Search}} = await MoviesDataBase(this.typeSearch).get(`https://www.omdbapi.com/?apikey=2f027767&s=${this.typeSearch}&page=${this.value}`);
        this.movies = Search;
      } catch (error) {
        console.error(error);
      }
    },
    detailSearchMovie (id){
      this.$router.push({name: 'Details_movie', params: {idMOVIE: id}})
    }
  }
}

</script>

<style scoped>
.container-search {
  width: 100%;
  margin: 0 auto;
  max-width: 1800px;
}
.search-block {
  font-family: Arial, Helvetica, sans-serif;
  color: orange;
  cursor: default;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}
.search-block input {
  width: 50%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
.search-block input:focus {
  background-color: #ddd;
  outline: none;
}
.search-block select {
  width: 20%;
  margin: 20px 0;
}
.search-block button {
  cursor: pointer;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: orange;
  border-radius: 25px;
  border: none;
  height: 40px;
  width: 250px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
  transition: transform 0.5s;
}
.search-block button:hover {
  transform: scale(1.2);
  cursor: pointer;
  color: black;
}
.movie-search {
  font-family: Arial, Helvetica, sans-serif;
  color: orange;
  cursor: default;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
.movie-search-block {
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  padding-top: 30px;
}
.movie-search-block li {
  display: flex;
  width: 15%;
  padding-bottom: 10px;
}
.movie-search-block img {
  border-radius: 15px;
  transition: 0.5s;
  height: 300px;
  margin-bottom: 20px;
  width: 200px;
}
.movie-search-block img:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>