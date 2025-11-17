<template>
  <Title :title="TITLE" />
  <div class="my-5 flex justify-between">
    <Filter></Filter>
    <v-btn prepend-icon="$vuetify"> 新建角色 </v-btn>
  </div>
  <Dialog></Dialog>
</template>
<script setup lang="ts">
import Title from "@/components/Title";
import Filter from "@/components/Filter";
import Dialog from "./components/Dialog";
// Table
// import Table from "./component/Table.vue";
// Table
const TITLE = "成員列表";
// const rules = [
//   (value) => !!value || "Required.",
//   (value) => (value && value.length >= 3) || "Min 3 characters",ㄝ
// ];
type User = {
  id: string;
  name: string;
  color: string;
  isDisabled: boolean;
};
</script>
// TODO -

<!-- <template>
    <div>
      <v-text-field hide-details="auto" label="Main input"></v-text-field>
    </div>
  </template> -->
