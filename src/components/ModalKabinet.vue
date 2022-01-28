<template>
  <div class="cabinet-user">
    <div class="cabinet-user-wrapper">
      <div class="cabinet-user-container">
        <div class="cabinet-user-title">
          <p>Модальное окно кабинета пользователя</p>
          <button class="button-cabinet-close" @click="closeModalCabinet">X</button>
        </div>
        <div class="cabinet-user-link">
          <span @click="loginCabinet">Вход</span>
          <span @click="regCabinet">Регистрация</span>
          <span @click="Cabinet">Демо кабинет</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalKabinet",
  props: {},
  data() {
    return {

    }
  },
  methods: {
    closeModalCabinet() {
      this.$emit('closeModalCabinet')
    },
    loginCabinet () {
      this.$emit('closeModalCabinet')
      this.$router.push({name: 'LoginForm'})
    },
    regCabinet () {
        this.$emit('closeModalCabinet')
        this.$router.push({name: 'RegistrationForm'})
    },
    Cabinet () {
      this.$emit('closeModalCabinet')
      this.$router.push({name: 'UserCabinet'})
    },
  },
  computed: {}
}
</script>

<style scoped>
.cabinet-user {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.cabinet-user-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.cabinet-user-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.cabinet-user-title {
  color: orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cabinet-user-title p {
  cursor: default;
}
.cabinet-user-title button {
  cursor: pointer;
}


.button-cabinet-close {
  background-color: orange;
  border: 0;
  width: 100px;
  height: 50px;
}

.cabinet-user-link {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cabinet-user-link span {
  padding: 10px 0;
  cursor: pointer;
  color: orange;
  font-size: 30px;
}
</style>