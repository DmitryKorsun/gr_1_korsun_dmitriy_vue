<template>
  <div id="details-movie" >
    <div id="container-details">
      <div id="movie-info-watch">

      </div>
      <div id="description-movie">
        <div id="title-movie">
          Охотники за приведениями

        </div>
        <div id="plot-movie">
          В городке Саммервилл где-то в Оклахоме творятся странные дела — конспирологические теории летают в воздухе,
          и даже школьные учителя всерьез говорят о странной сейсмической активности. Но всё это не выдумки скучающих
          провинциалов, а странное наследие местной легенды — «грязного фермера», который погиб, пытаясь оградить
          родные края от нечисти.
        </div>
        <button id="add-favorites-movie" @click="add_to_favorites_list(MovieId())">Добавить в избранное</button>
        <div id="full-details-movie">
          <p>
            Время просмотра
            <span>60 минут</span>
          </p>
          <p>
            Актеры
            <span>Кэрри Кун, Пол Радд, Финн Вулфхард, МакКенна Грейс, Логан Ким, Селеста О’Коннор, Билл Мюррей, Дэн Эйкройд, Эрни Хадсон, Энни Поттс</span>
          </p>
          <p>
            Режиссёр
            <span>Джейсон Райтман</span>
          </p>
          <p>
            Жанр
            <span>Фантастика, Комедии, Боевики</span>
          </p>
          <p>
            Аудиодорожки
            <span>Русский</span>
          </p>
          <pre>{{movieList()}}</pre>
          <p>
            Награды
            <span>Высшая награда за труд бла бла бла</span>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {MovieBase} from '@/baseOn'
export default {
  name: "Details_movie",
  data (){
    return{
    moviesDetail:[],
    }
  },
  mounted() {
    this.movieList()
  },
  methods: {
    movieList(){
      try {
        const {dataMovie} = MovieBase(`i=${this.$route.params.id}`)
        this.moviesDetail = dataMovie;
      }catch (error){
        console.log(error)
      }
    }
  }
}
</script>

<style>
#details-movie {
  background: url("../assets/poster.jpeg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 789px;
}

#container-details {
  background: #1414147e;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#add-favorites-movie {
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

#add-favorites-movie:hover {
  transform: scale(1.2);
  cursor: pointer;
  color: black;
}

#description-movie {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  color: orange;
  font-family: "Lucida Sans","Lucida Sans",Geneva, Verdana,sans-serif;
  text-align: justify;
}

#title-movie {
  width: 58%;
  color: orange;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-size: 35px;
  text-align: center;
  font-family: Arial,Helvetica,sans-serif;
}

#plot-movie {
color: #ffB100;
  font-family: Arial,sans-serif;
  font-size: 14px;
  text-align: justify;
  text-shadow: black 0.1em 0.1em 0.2em;
  margin: 20px 0;
  flex-direction: column;
  width: 60%;
}
#full-details-movie {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 30px;
}
#full-details-movie p{
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: orange;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
}
#full-details-movie span {
  color: white;
}
</style>