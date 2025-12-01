<template>
  <v-navigation-drawer permanent color="surface-variant" :width="240">
    <v-list-item
      title="分帳系統"
      :subtitle="dayjs().format('YYYY-MM-DD')"
    ></v-list-item>
    <v-divider></v-divider>
    <v-list-item
      v-for="(item, index) in sidebarMenus"
      :key="`${item.name + index}menus`"
      :title="item.title"
      :to="{ name: item.name }"
      :active="route.name === item.name"
      :prepend-icon="item.icon"
      link
    ></v-list-item>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { menus } from "@/router/menus";
import dayjs from "dayjs";
import { useRoute } from "vue-router";
import { useDate } from "vuetify";
const route = useRoute();
const SIDEBAR_NAMES = ["home", "user"];
const sidebarMenus = computed(() =>
  menus.filter((i) => SIDEBAR_NAMES.includes(i.name))
);
</script>
<style lang="scss">
.v-list-item--active {
  background-color: rgba(0, 0, 0, 0.08);
  font-weight: 600;
}
</style>
