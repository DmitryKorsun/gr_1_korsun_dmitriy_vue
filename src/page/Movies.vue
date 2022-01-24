<template>
  <div class="container">
    <div class="block-movie">
      <ul class="block-poster-movie">
        <li :key="movie" v-for="movie in poster_movie">
          <img class="img-movie-poster" :src="movie.image" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movies",
  data () {
    return {
      poster_movie: [
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
        {image: require('@/assets/poster.jpeg')},
      ]
    }
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