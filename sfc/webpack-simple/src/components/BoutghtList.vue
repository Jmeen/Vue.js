<template>
        <div>
        <h2> 산 물건들 </h2>
          <ul>
            <li v-for="(item,index) in filteredItems" v-bind:key="index">
                        {{ item.name }}
            <button v-on:click=restoreItem(item)>구매취소</button>
            <button @click=removeItem(item)>삭제</button>
              </li>
            </ul>
      </div>
</template>
<script>
export default {
  props: ["bought-items"],
  methods: {
        restoreItem: function (item) {
          // alert(item.name+"을(를) 복구합니다.")
          item.buy = false;
        },
        removeItem: function (item) {
          // 부모로 삭제할 아이템 전달
          // console.log("삭제할 item", item.name)
          this.$emit("remove-item", item)
        }
      },
      computed: {
        filteredItems: function () {
          //  미리 연산을 수행, 결과 캐싱
          return this.boughtItems.filter(item => {
            return item.buy;
          })
        }
      }
}
</script>
<style scoped>

</style>