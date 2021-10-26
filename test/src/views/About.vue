<template>
  <div class="about">
    <h1>This is an about page</h1>
    <JMCoder :title="title" name="update name"></JMCoder>
  </div>
</template>

<script>
import JMCoder from "@/components/jmView.vue";
export default {
  components:{
    JMCoder
  },
  data(){
   return{
    title:'about Title',
   }
  }
}
</script>
