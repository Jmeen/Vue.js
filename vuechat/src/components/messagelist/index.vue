<template>
      <ul>
      <li v-for="(message,index) in messages" v-bind:key="index">
        <div class="message">{{message.body}}</div>
        <div class="date">{{message.date}}</div>
        <div class="name">{{message.user.name}}</div>
      </li>
    </ul>
</template>
<script>
export default {
  name: 'message-list',
  props: {
    'messages': {
      type: Array,
      default: [], 
      required: true 
}
}}
</script>
<style scoped>

</style>