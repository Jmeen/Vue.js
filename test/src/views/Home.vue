<template>
  <div>
    <h1>This is homepage</h1>
        <p>{{name}}</p><br>
        <button @click="updateName">click</button>
  </div>
</template>

<script>
// import JMCoder from "@/components/jmView.vue";
export default {
  // components:{
  //     JMCoder
  //   },
  data(){
    return{
      name:'jaemin'
    }
  },
  beforeCreate(){
    console.log('beforeCreate',this.name)
  },
  created(){
    console.log('Create',this.name)
  },
  beforeMount(){
    alert("beforeMount")
  },
  mounted(){
    alert("mount")
  },
  beforeUpdate(){
    alert("beforeUpdate",this.name)
  },
  updated(){
    alert("updated!@!!!")
  },
  beforeDestroy(){
    alert('beforeDestroy');
  },
  destroyed(){
    alert('destroyed')
  },
  methods:{
    updateName(){
      this.name="hello"
    }
  }
}
</script>

<style scoped>
h1{
  color:red
}
</style>