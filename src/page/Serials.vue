<template>
  <div class="container">
    <div class="serails-block">
      <ul class="poster-list">
        <li :key="post" v-for="post in posters">
          <img alt="" class="img-poster-serials" :src="post.post">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Serials",
  data () {
    return {
      posters: [
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
        {post: require('@/assets/movie-bannerjpg.jpg')},
      ]
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.serails-block {
  height: 100%;
}
.poster-list {
  padding-top: 30px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}
.poster-list li {
  display: flex;
  width: 15%;
  padding-bottom: 10px;
}
.img-poster-serials {
  border-radius: 15px;
  transition: 0.5s;
  height: 300px;
  margin-bottom: 20px;
  width: 200px;
}
.img-poster-serials:hover {
  transform: scale(1.1);
  cursor: pointer;
}

</style>