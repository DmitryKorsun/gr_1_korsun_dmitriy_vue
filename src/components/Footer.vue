<template>
  <footer>
    <div class="container">
      <div class="container-block-footer">
        <div class="left-side-bar">
          <img @click="Home_page_navigate" class="img-footer" src="../assets/logo.png" alt=""/>
        </div>
        <ul class="right-side-bar">
          <li @click="Home_page_navigate">Домой</li>
          <li>FAQ</li>
          <li @click="Favorite_navigate">Избанное</li>
        </ul>
        <ul class="right-side-bar">
          <li @click="Serials_navigate">Сериалы</li>
          <li @click="Films_navigate">Фильмы</li>
          <li @click="Movie_navigate">Мультфильмы</li>
        </ul>
      </div>
      <div class="footer-down-block">
        <p>©2021 Korsun D.V.</p>
        <span>Условия пользования</span>
        <span>Политика конфиденциальности</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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
    }
  }
}
</script>

<style>
footer {
  border-top: 4px solid black;
  width: 100%;
  height: 100%;
  background: orange;
}

.container-block-footer {
  padding: 10px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.img-footer {
  width: 200px;
  height: 100%;
  cursor: pointer;
}

.right-side-bar {
  display: flex;
  flex-direction: column;
  height: 100%;
  list-style: none;
}

.right-side-bar li {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0;
  cursor: pointer;
  color: white;
}

.right-side-bar span:hover {
  transform: scale(1.1);
}

.footer-down-block {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;
}

.footer-down-block p {
  margin-left: 30px;
  margin-right: 30px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: white;
  cursor: default;
}

.footer-down-block > span {
  margin-left: 30px;
  margin-right: 30px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: white;
  cursor: pointer;
}

.footer-down-block span:hover {
  transform: scale(1.1);
}
</style>