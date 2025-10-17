<template>
  <v-main>
    <Sidebar />
    <div class="w-[95%] !m-[0_auto] !py-[3rem]">
      <router-view />
    </div>
  </v-main>
</template>

<script lang="ts" setup>
import Sidebar from "./Sidebar.vue";
</script>
