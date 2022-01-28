<template>
<div>
  <label for="unique_id">{{unique_text_select}}</label>
  <select v-model="selected" :id="unique_id">
      <option v-for="option in options" :value="option.value" :key="option">
        {{ option.text }}
      </option>
    </select>
    <span>Выбрано: {{ selected }}</span>
</div>
</template>

<script>
export default {
  name: "UniqueSelect",
  props:{
    unique_text_select: {
      type:String,
      default:'Выберите вашу страну:'
    },
    unique_id: {
      type: String,
      default: '',
    },
    selected: {
      default:''
    },
  },
  data () {
    return {
      options: [
        { text: 'Украина', value: 'Украина' },
        { text: 'Россия', value: 'Россия' },
        { text: 'Молдова', value: 'Молдова' },
        { text: 'Англия', value: 'Англия' }
      ]
    }
  }
}
</script>

<style scoped>

</style>