<template>
  <div id="header">
    <img class="logo-header" alt="Logo" :src="image_logo" @click="Home_page_navigate"/>
    <nav>
      <ul class="nav-menu">
        <li @click="Home_page_navigate">Домой</li>
        <li @click="Serials_navigate">Сериалы</li>
        <li @click="Films_navigate">Фильмы</li>
        <li @click="Movie_navigate">Мультфильмы</li>
        <li @click="Favorite_navigate">Избанное</li>
        <li @click="Search_navigate">Поиск</li>
      </ul>
    </nav>
<!--    <div id="form-search">
      <form>
        <input class="search-form" type="text" name="text" placeholder="Начните поиск фильма..."/>
      </form>
    </div>-->
    <modal-kabinet v-if="modalCabinetVisible" @closeModalCabinet="closeInfoModalCabinet"></modal-kabinet>
    <div id="icon-search" @click="showCabinetUser">
      Аккаунт
    </div>
  </div>
</template>

<script>
import image_logo from "../assets/logo.png"

export default {
  name: "Header",
  data() {
    return {
      image_logo,
      modalCabinetVisible: false
    }
  },
  methods: {
    Home_page_navigate() {
      this.$router.push({name: 'Home_page'})
    },
    Serials_navigate() {
      this.$router.push({name: 'Serials'})
    },
    Films_navigate() {
      this.$router.push({name: 'Films'})
    },
    Movie_navigate() {
      this.$router.push({name: 'Movies'})
    },
    Favorite_navigate() {
      this.$router.push({name: 'Favorit'})
    },
    Search_navigate () {
      this.$router.push({name: 'Search'})
    },
    showCabinetUser() {
      this.modalCabinetVisible = true
    },
    closeInfoModalCabinet() {
      this.modalCabinetVisible = false
    }
  }
}
</script>

<style>
#icon-search {
  padding-right: 10px;
}

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

.nav-menu {
  list-style: none;
  margin: 0;
  padding-left: 0;
  display: flex;
  justify-items: center;
}

.nav-menu li {
  color: white;
  margin: 0 30px;
  font-size: 30px;
  cursor: default;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.nav-menu li:hover {
  cursor: pointer;
  color: aqua;
}

.search-form {
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

.search-form:focus {
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

  .nav-menu li {
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