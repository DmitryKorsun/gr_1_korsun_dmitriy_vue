<template>
<div class="container">
  <div class="block-films">
    <ul class="block-poster-films">
      <li v-for="slide in slides" :key="slide">
        <img class="img-film-poster"  :src="slide.image" alt="">
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Films",
  data () {
    return {
      slides: [
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
.block-films {
  height: 100%;
}
.block-poster-films {
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  padding-top: 30px;
}
.block-poster-films li {
  display: flex;
  width: 15%;
  padding-bottom: 10px;
}
.img-film-poster {
  border-radius: 15px;
  transition: 0.5s;
  height: 300px;
  margin-bottom: 20px;
  width: 200px;
}
.img-film-poster:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>