<template>
  <v-navigation-drawer permanent color="surface-variant" :width="240">
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <v-list-item
      v-for="(item, index) in menus"
      :key="`${item.name + index}menus`"
      :title="item.name"
      :to="{ name: item.name }"
      :active="route.name === item.name"
      :prepend-icon="item.icon"
      link
    ></v-list-item>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { menus } from "@/router/menus";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<style lang="scss">
.v-list-item--active {
  background-color: rgba(0, 0, 0, 0.08);
  font-weight: 600;
}
</style>
