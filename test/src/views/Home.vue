<template>
  <div>
    <h1>This is homepage</h1>
    <JMCoder></JMCoder>
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
      name:'jaemin'
    }
  }

}
</script>

<style scoped>
h1{
  color:red
}
</style>