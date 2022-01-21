<template>
  <div id="header">
    <img class="logo-header" alt="Logo" :src="image_logo" @click="Home_page_navigate"/>
    <nav>
      <ul>
        <li @click="Home_page_navigate">Домой</li>
        <li @click="Serials_navigate">Сериалы</li>
        <li @click="Films_navigate">Фильмы</li>
        <li @click="Movie_navigate">Мультфильмы</li>
        <li>Избанное</li>
      </ul>
    </nav>
    <div id="form-search">
      <form>
        <input type="text" name="text" placeholder="Начните поиск фильма..."/>
      </form>
    </div>
    <div id="icon-search">

    </div>
  </div>
</template>

<script>
import image_logo from "../assets/logo.png"

export default {
  name: "Header",
  data() {
    return {
      image_logo
    }
  }
}
</script>

<style>
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30%;
  background: orange;
}

.logo-header {
  margin-left: 30px;
  padding: 10px 0;
  width: 190px;
}

.logo-header:hover {
  cursor: pointer;
}

nav {
  color: white;
  display: flex;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
  display: flex;
  justify-items: center;
}

li {
  color: white;
  margin: 0 30px;
  font-size: 30px;
  cursor: default;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

li:hover {
  cursor: pointer;
  color: aqua;
}

input[type="text"] {
  width: 1px;
  border: none;
  color: black;
  border-bottom: 2px solid black;
  font-size: 13px;
  background-color: orange;
  background-image: url("../assets/search_logo.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 7px 12px 40px;
  transition: width 0.4s ease-in-out;
}

input[type="text"]:focus {
  width: 100%;
}

#form-search {
  width: 15%;
}

@media (max-width: 1190px) {
  .logo-header {
    width: 200px;
  }

  li {
    margin: 0 15px;
    font-size: 20px;
  }
}

@media (max-width: 1000px) {
  #header {
    flex-direction: column;
  }

  .logo-header {
    width: 250px;
  }

  li {
    margin: 0 20px;
    padding: 10px 0;
    font-size: 30px;
  }

  #form-search {
    width: 25%;
    padding-bottom: 10px;
  }
}

@media (max-width: 870px) {
  li {
    margin: 0 15px;
    padding: 10px 0;
    font-size: 25px;
  }

  #form-search {
    width: 40%;
  }
}

@media (max-width: 710px) {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }

  li {
    margin: 0 15px;
    padding: 10px 0;
    font-size: 25px;
    width: 25%;
  }

  #form-search {
    width: 35%;
  }
}

@media (max-width: 600px) {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }

  li {
    margin: 0 15px;
    padding: 10px 0;
    font-size: 25px;
    width: 30%;
  }

  #form-search {
    width: 50%;
  }
}

@media (max-width: 420px) {
  ul {
    flex-direction: column;
  }

  #form-search {
    width: 60%;
  }
}
</style>