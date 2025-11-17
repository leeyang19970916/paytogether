<template>
  <v-app class="bg-white">
    <component :is="Default"></component>
  </v-app>
</template>

<script lang="ts" setup>
import Default from "./layouts/default.vue";
</script>
