<template>
  <Title v-if="menu" :title="menu.title" />
  <div class="my-5 flex justify-between">
    <Filter></Filter>
    <v-btn prepend-icon="$vuetify" @click="() => dialogHandler('create')">
      新建角色
    </v-btn>
  </div>
  <div class="grid grid-cols-4 gap-5">
    <Card
      :key="`user-${user.id}`"
      v-for="user in mock_users"
      :user
      @showDialog="(user:User)=>dialogHandler('view',user)

      "
    ></Card>
  </div>
  <Dialog
    v-model="dialog.isShow"
    :mode="dialog.mode"
    :user="dialog.user"
    @changeMode="(mode:Mode)=>{
      if (mode==='edit') {
        dialog.mode='view'
      }else{
        dialog.mode='edit'
      }
    }"
  ></Dialog>
</template>
<script setup lang="ts">
import type { User } from "@/types/user";
import type { Mode } from "@/types";
import Title from "@/components/Title";
import Filter from "@/components/Filter";
import Dialog from "./components/Dialog";
import Card from "./components/Card";
import { mock_users } from "@/mock";
import { menus } from "@/router/menus";
const route = useRoute();
const menu = computed(() => {
  const routeName = route.name as string;
  return menus.find((m) => m.name === routeName);
});
const dialog = ref<{ isShow: boolean; mode: Mode; user?: User }>({
  isShow: false,
  mode: "view",
  user: undefined,
});
const dialogHandler = (mode: Mode, user?: User) => {
  dialog.value.isShow = true;
  dialog.value.mode = mode;
  dialog.value.user = user;
};
</script>
