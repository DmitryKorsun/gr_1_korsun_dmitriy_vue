<template>
  <form action="">
    <div class="container-form">
      <h1>Вход</h1>
      <p>Заполните все формы для входа в аккаунт</p>
      <hr>
      <unique-input unique_input_title="Введите Email" unique_id="reg-form-em" unique_placeholder="Введите Email"></unique-input>
      <unique-input unique_input_title="Введите пароль" unique_id="reg-form-pass" unique_placeholder="Введите пароль" unique_type="password"></unique-input>
      <button class="reg-button" type="submit">Вход</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm"
}
</script>

<style scoped>

</style>