<template>
<div id="movies-list">
  <h2>Новые фильмы</h2>
  <div class="slider">
    <carousel :per-page="6" :navigate-to="0" :mouse-drag="true" :paginationEnabled="false" :navigationEnabled="true" :navigationClickTargetSize="9">
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
      <slide class="id-movie">
        <div @click="detail_movie_id">
          <img class="img-banner" src="../assets/poster.jpeg">
        </div>
      </slide>
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
    </carousel>
  </div>
  <h2>Рекомендуем посмотреть</h2>
  <div class="slider">
    <carousel :per-page="4" :navigate-to="0" :mouse-drag="true" :paginationEnabled="false" :navigationEnabled="true" :navigationClickTargetSize="9">
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
    </carousel>
  </div>
  <h2>Про всякое</h2>
  <div class="slider">
    <carousel :per-page="4" :navigate-to="0" :mouse-drag="true" :paginationEnabled="false" :navigationEnabled="true" :navigationClickTargetSize="9">
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
      <slide class="id-movie">
        <img class="img-banner" src="../assets/movie-bannerjpg.jpg">
      </slide>
    </carousel>
  </div>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: "Movie",
  data () {
    return {
      paginationButtons:false
    }
  },
  components: {
    Carousel, Slide
  },
  methods: {
    detail_movie_id(){
      this.$router.push({name:'Details_movie'})
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
#movies-list h2{
  color: orange;
  font-family: Arial, Helvetica,sans-serif;
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
  margin-top:23px;
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