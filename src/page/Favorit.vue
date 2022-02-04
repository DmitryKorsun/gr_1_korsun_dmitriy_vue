<template>
  <div class="favorite-container">
    <div class="favorite-list">
      <div class="favorite-movies" :key="movie" v-for="movie in this.$store.state.addFavorite.list">
        <img class="favorite-list-img" :src="movie.Poster" alt="">
        <div class="button-list">
          <button class="button-remove" title="Удалить" @click="$store.commit('removeDate',movie)">Удалить</button>
          <button class="button-remove" title="Отметить" @click="movieWatchedMark">Отметить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favorit",
  data() {
    return {
      movies: [],
    }
  },
  methods: {
    movieWatchedMark(movie) {
      this.$store.commit('watchedMovie', movie)
    },
  },
}
</script>

<style scoped>
.favorite-container {
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
}

.favorite-list {
  display: flex;
  padding: 10px 0;
  justify-content: flex-start;
}

.favorite-movies {
  padding-right: 20px;
}

.button-list {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

.button-list button {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: none;
  background-color: orange;
  width: 100px;
  height: 50px;
  cursor: pointer;
}
</style>