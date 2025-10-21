<template>
  <v-main>
    <Sidebar />
    <div class="w-[95%] !m-[0_auto] !py-[2rem] h-100">
      <router-view />
    </div>
  </v-main>
</template>

<script lang="ts" setup>
import Sidebar from "./Sidebar.vue";
</script>
