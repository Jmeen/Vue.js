<template>
<div id="app">
<cart-header></cart-header>
    <div v-show="showall">
      <h2>전체 목록</h2>
      <ul>
        <li v-for="(item,index) in items"
        v-bind:key="index">{{item.name}}</li>
      </ul>
    </div>
<cart-footer></cart-footer>
</div>
</template>
<script>
import cartheader from "./components/cartheader"
import cartFooter from "./components/cartFooter"
export default{
  data:()=>{
    return{
        items: [
          { name: "무", buy: false },
          { name: "배추", buy: false },
          { name: "쪽파", buy: true },
          { name: "고춧가루", buy: true }
        ],
        showall:true,
        showOption:true
  }},
  components:{
    "cart-header":cartheader,
    "cart-footer":cartFooter
  }
}
</script>

<style >
li{
  list-style: none;

}
</style>