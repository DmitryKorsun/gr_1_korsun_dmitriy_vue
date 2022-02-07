<template>
  <div>
    <label :for="unique_id">{{ unique_input_title }}</label>
    <input :id="unique_id" :type="unique_type" :placeholder="unique_placeholder">
  </div>
</template>

<script>
export default {
  name: "UniqueInput",
  props: {
    unique_id: {
      type: String,
      default: 'form'
    },
    unique_input_title: {
      type: String,
      default: 'Название блока формы',
    },
    unique_type: {
      type: String,
      default: 'text',
    },
    unique_placeholder: {
      type: String,
      default: '',
    }
  },
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