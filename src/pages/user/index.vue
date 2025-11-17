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
  <Dialog v-model="dialog.isShow" :mode="dialog.mode"></Dialog>
</template>
<script setup lang="ts">
import Title from "@/components/Title";
import Filter from "@/components/Filter";
import Dialog from "./components/Dialog";

const TITLE = "成員列表";
const dialog = ref({ isShow: false, mode: "view" });
// const
</script>
