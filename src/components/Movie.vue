<template>
  <div id="movies-list">
    <div class="slider">
      <h2>{{ description }}</h2>
      <carousel :per-page="6" :navigate-to="0" :mouse-drag="true" :paginationEnabled="false" :navigationEnabled="true"
                :navigationClickTargetSize="9">
        <slide class="id-movie" :key="movied.imdbID + Math.random()" v-for="movied in movies">
          <div @click="detailMovie(movied.imdbID)">
            <img class="img-banner" :src="movied.Poster">
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';
import {MoviesDataBase} from '../baseOn'

export default {
  name: "Movie",
  data() {
    return {
      paginationButtons: false,
      movies: [],
    }
  },
  props: {
    type: String,
    description: String,
  },

  components: {
    Carousel, Slide
  },
  mounted() {
    this.getMovieDetail();
  },
  methods: {
    async getMovieDetail () {
      try {
        const {data: {Search} } = await MoviesDataBase(this.type).get(`https://www.omdbapi.com/?apikey=2f027767&${this.type}`);
        this.movies = Search;
      }catch (error){
        console.error(error);
      }
    },
    detailMovie (id) {
      this.$router.push({name:'Details_movie', params:{idMOVIE: id}})
    }
  }
}
</script>

<style>
#movies-list {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
}

#movies-list h2 {
  color: orange;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0 10px 20px;
  cursor: default;
}

.slider {
  width: 90%;
  height: 100%;
  text-align: center;
  margin: auto;
}

.id-movie {
  margin-top: 23px;
  padding-left: 20px;
  flex: 1;
}

.img-banner {
  border-radius: 15px;
  transition: 0.5s;
  height: 300px;
  margin-bottom: 20px;
  width: 200px;
}

.img-banner:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.VueCarousel-navigation-button {
  color: orange !important;
  outline: none !important;
}
</style>