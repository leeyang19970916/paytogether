<template>
  <Title :title="TITLE" />
  <div class="my-5 flex justify-between">
    <Filter></Filter>
    <v-btn
      prepend-icon="$vuetify"
      @Click="
        () => {
          dialog.isShow = true;
          dialog.mode = 'create';
        }
      "
    >
      新建角色
    </v-btn>
  </div>
  <div class="grid grid-cols-4 gap-5">
    <!-- {{ mock_users.map(i=>{return  (<Card class="col-span-2" ...i></Card>)} ) }} -->
    <Card class="col-span-2"></Card>
    <Card :key="`user-${user.id}`" v-for="user in mock_users" :user></Card>
  </div>

  <Dialog v-model="dialog.isShow" :mode="dialog.mode"></Dialog>
</template>
<script setup lang="ts">
import Title from "@/components/Title";
import Filter from "@/components/Filter";
import Dialog from "./components/Dialog";
import Card from "./components/Card";
import { mock_users } from "@/mock";

const TITLE = "成員列表";
const dialog = ref({ isShow: false, mode: "view" });
// const
</script>
