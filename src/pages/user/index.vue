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
          dialog.user = undefined;
        }
      "
    >
      新建角色
    </v-btn>
  </div>
  <div class="grid grid-cols-4 gap-5">
    <Card class="col-span-2"></Card>
    <Card
      :key="`user-${user.id}`"
      v-for="user in mock_users"
      :user
      @showDialog="
        (user:User) => {
          dialog.isShow=true
          dialog.mode='edit'
          dialog.user=user
        }
      "
    ></Card>
  </div>

  <Dialog
    v-model="dialog.isShow"
    :mode="dialog.mode"
    :user="dialog.user"
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
// import dayjs from "dayjs";
// import { BLACK_COLOR } from "@/constants";

const TITLE = "成員列表";
const dialog = ref<{ isShow: boolean; mode: Mode; user?: User }>({
  isShow: false,
  mode: "view",
  user: undefined,
});
// const
</script>
