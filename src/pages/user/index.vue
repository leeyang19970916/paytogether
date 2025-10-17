<template>
  成員列表
  一個input 只能搜尋
  旁邊有一個新增欄位，打開泡泡，跟編輯沿用 CreateUserDialog
  CreateUserDialog（移出去做components）:{ 
    名字不能重複，選顏色（調色盤）
  }
  列表
  item 可以編輯可以停用， 不能刪除
  編輯全部都可以改，但名字不能重複的機制是一樣的
顯示他的頭像
</template>
<script setup lang="ts">
// const rules = [
//   (value) => !!value || "Required.",
//   (value) => (value && value.length >= 3) || "Min 3 characters",
// ];
type User={
  id:string,
  name:string,
  color:string,
  isDisabled:boolean
}
</script>
// TODO 
- 



  <!-- <template>
    <div>
      <v-text-field hide-details="auto" label="Main input"></v-text-field>
    </div>
  </template> -->