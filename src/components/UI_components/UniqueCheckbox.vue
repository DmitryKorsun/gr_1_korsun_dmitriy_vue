<template>
  <div>
    <label :for="unique_id_check">{{ unique_title_check }}</label>
    <input type="checkbox" :id="unique_id_check" :value="unique_value_check" v-model="modelValue">
  </div>

</template>

<script>
export default {
  name: "UniqueCheckbox",
  props: {
    modelValue: {
      type:String,
      default:'',
    },
    unique_title_check: {
      type:String,
      default: 'unique_title_check'
    },
    unique_id_check: {
      type:String,
      default: 'unique_id_check'
    },
    unique_value_check: {
      type:String,
      default: 'unique_value_check'
    },
  }
}
</script>

<style scoped>

</style>