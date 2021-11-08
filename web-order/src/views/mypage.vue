<template>
   <h1>Hello! {{userInfo.name}} </h1>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(["userInfo"])
    }
}
</script>