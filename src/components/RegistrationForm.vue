<template>
  <form action="">
    <div class="container-form">
      <h1>Регистрация</h1>
      <p>Заполните все формы для создания аккаунта</p>
      <hr>
      <unique-input unique_input_title="Введите Логин" unique_id="reg-form-login"
                    unique_placeholder="Введите ваш логин на сайте"></unique-input>
      <unique-input unique_input_title="Введите Email" unique_id="reg-form-em"
                    unique_placeholder="Введите Email" v-model="login"></unique-input>
      <unique-input unique_input_title="Введите пароль" unique_id="reg-form-pass" unique_placeholder="Введите пароль"
                    unique_type="password" v-model="password"></unique-input>
      <unique-input unique_input_title="Повторите пароль" unique_id="reg-form-pass-pass"
                    unique_placeholder="Повторите пароль" unique_type="password"></unique-input>
      <hr>
      <unique-gender></unique-gender>
      <hr>
      <hr>
      <unique-select></unique-select>
      <hr>
      <p class="confirm-politics">Создавая аккаунт вы соглашаетесь с <a href="">Политика конфиденциальности</a>.
        <unique-checkbox unique_title_check="Согласиться?" unique_id_check="Сheak"
                         unique_value_check="Подтверждение"></unique-checkbox>
      </p>
      <button class="reg-button" type="submit">Регистрация</button>
    </div>
    <div class="container-signed">
      <p>Вы уже имеете аккуант? <a @click="loginCabinet">Войти</a>.</p>
    </div>
  </form>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    loginCabinet() {
      this.$router.push({name: 'LoginForm'})
    },
  }
}
</script>

<style>
.container-form {
  width: 100%;
  margin: 0 auto;
  max-width: 700px;
}

.container-form h1 {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-weight: bold;
  font-size: 40px;
  cursor: default;
}

.container-form p {
  font-family: Arial, Helvetica, sans-serif;
  color: orange;
  cursor: default;
  font-size: 20px;
}

.container-form label {
  font-family: Arial, Helvetica, sans-serif;
  color: orange;
  cursor: default;
  font-size: 20px;
}

hr {
  border: 1px solid black;
  margin-bottom: 25px;
}

.reg-button {
  background-color: orange;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.reg-button:hover {
  opacity: 1;
}

.confirm-politics {
  color: black;
}

a {
  color: dodgerblue;
}

.container-signed {
  background-color: #f1f1f1;
  text-align: center;
}

.container-signed p {

}
</style>