<template>
  <form>
    <div class="container-form">
      <h1>Вход</h1>
      <p>Заполните все формы для входа в аккаунт</p>
      <hr>
      <label for="email">Введите email</label>
      <input id="email" v-model="login">
      <label for="password">Введите password</label>
      <input id="password" v-model="password">

      <!--      <unique-input unique_input_title="Введите Email" unique_id="reg-form-em" unique_placeholder="Введите Email"-->
      <!--                    v-model.trim="email"></unique-input>-->
      <!--      <unique-input unique_input_title="Введите пароль" unique_id="reg-form-pass" unique_placeholder="Введите пароль"-->
      <!--                    unique_type="password" v-model.trim="password"></unique-input>-->
      <button class="reg-button" @click.prevent="Login">Вход</button>
      <button class="reg-button" @click.prevent="LoginGithub">GitHub</button>
      <button class="reg-button" @click.prevent="offGithub">GitHub logaut</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    Login() {
      this.$store.dispatch('user/loginUser', {login: this.login, password: this.password}).then((status) => {
        if (status === 'Ok') {
          this.$router.push('/userCabinet')
        } else if (status === 'error') {
          alert('Ошибка');
        }
      })
    },
    LoginGithub() {
      this.$store.dispatch('user/gitHubAuth').then(() => {
        console.log('loginResult')
      })
    },
    offGithub() {
      this.$store.dispatch('user/LogauthGit').then(() => {
        alert("Вышли из аккаунта")
      })
    }
  }
}
</script>

<style scoped>
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