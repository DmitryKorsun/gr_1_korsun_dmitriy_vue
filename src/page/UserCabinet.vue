<template>
  <div class="cabinet-user-form">
    <div class="container-user">
      <div class="icon-user"></div>
    </div>
    <div class="information-user">
      <form v-for="option in userInfos" :value="option.loginUser" :key="option">
        <label for="login">Логин пользователя:</label>
        <input :value="option.loginUser" id="login" @focusin="readonlyChangeOff" :readonly="true">
        <label for="Email">Почта пользователя:</label>
        <input :value="option.UserEmail" id="Email" @focusin="readonlyChangeOff" :readonly="true">
        <label for="password">Пароль:</label>
        <input type="password" :value="option.PasswordUser" id="password" @focusin="readonlyChangeOff" :readonly="true">
        <button class="reg-button" type="submit" @click="readonly=false">Изменить информацию</button>
        <button class="reg-button" @clickю.prevent="Logauth">Выйти из аккаунта</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "UserCabinet",
  methods: {
    readonlyChangeOff(event) {
      event.preventDefault()
      event.target.removeAttribute('readonly')
      console.log(event)
    },
    Logauth() {
      this.$store.dispatch('user/LogauthGit').then((result) => {
        console.log('loginResult', result)
      })
    },
  },
  data() {
    return {
      readonly: true,
      userInfos: [
        {
          loginUser: 'Dmitry', UserEmail: 'dsdsds@gmail.com', PasswordUser: 'sadvduudhduj7627yhdsii'
        }
      ]
    }
  }
}
</script>

<style scoped>
.cabinet-user-form {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
}

.container-user {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.icon-user {
  width: 150px;
  height: 150px; /* Ширина и высота */
  border-radius: 50%; /* Превращаем в круг */
  background: url('../assets/logo.png') no-repeat -70px 0; /* Параметры фона */
  background-size: auto 150px; /* Высота фотографии равна высоте элемента */
  display: flex;
  align-items: center;
}

label {
  font-family: Arial, Helvetica, sans-serif;
  color: orange;
  cursor: default;
  font-size: 20px;
}

input {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input:focus {
  background-color: #ddd;
  outline: none;
}
</style>