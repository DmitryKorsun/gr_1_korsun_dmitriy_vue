<template>
  <div class="banner-container">
    <div class="video-block" v-for="movie in postBanners" :key="movie">
      <video autoplay loop muted :src="movie.videoBanner"></video>
    </div>
    <div class="banner-text" v-for="movie in postBanners" :key="movie">
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.description }}</p>
      <button id="play-movie-button">
        <span>Посмотреть</span>
      </button>
      <button id="info-movie-button">
        <span>Информация</span>
      </button>
    </div>

  </div>
</template>

<script>

export default {
  name: "Banner",
  computed: {
    postBanners() {
      return this.$store.state.FilmsNew.moviesBanner
    }
  },
  created() {
  }
}
</script>

<style>
.banner-container {
  display: flex;
  align-items: center;
  height: 500px;
  width: 100%;
  position: relative;
  background: #1414147e;
}

.banner-container > .video-block {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 99%;
  overflow: hidden;
}

.banner-container > .video-block > video {
  width: 100%;
}

.banner-text {
  margin-left: 40px;
  width: 500px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: default;
}

.banner-text h1 {
  color: orange;
  text-shadow: white 0.1em 0.1em 0.4em;
  font-size: 50px;
  margin-bottom: 30px;
}

.banner-text p {
  color: white;
  text-shadow: white 0 0.1em 0.4em;
  text-align: justify;
  margin-bottom: 30px;
  font-size: 15px;
}

.banner-text button {
  border: none;
  background: orange;
  color: white;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  transition: transform 0.5s;
}

.banner-text button:hover {
  background: antiquewhite;
  color: black;
  cursor: pointer;
  transform: scale(1.1);
}

#play-movie-button {
  width: 150px;
  height: 30px;
  margin-right: 20px;
}

#info-movie-button {
  width: 190px;
  height: 30px;
}
</style>