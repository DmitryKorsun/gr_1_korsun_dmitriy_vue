<template>
<div>
  <p>Выберите ваш пол:</p>
  <label for="men">М</label>
  <input type="radio" id="men" value="М" v-model="modelValue"/>
  <br>
  <label for="women">Ж</label>
  <input type="radio" id="women" value="Ж" v-model="modelValue">
  <br>
  <span>Выбрано: {{ modelValue }}</span>
</div>
</template>

<script>
export default {
  name: "UniqueGender",
  props:{
    modelValue:{
      default: ''
    }
  },
}
</script>

<style scoped>
</style>