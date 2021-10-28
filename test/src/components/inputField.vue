<template>
    <form action="">
      <label for="">name</label>
      <input type="text" 
      v-model="name" 
      style="padding:30px; border:2px solid green;"
      @input="$emit('input', $event.target.value)"
      />

      <button type="submit" >submit</button>
    </form>
</template>

<script>
export default {
    props:{
        value : {
            type:String,
            require:true
        }  
    } ,
    // methods:{
        // updateName(e){
        //         console.log(e.target.value)
        //         // this.$emit("update-name",e.target.value)
        // }
    // }
    

}
</script>