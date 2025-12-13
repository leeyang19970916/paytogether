<template>
  <v-tabs v-model="model" align-tabs="start" color="deep-purple-accent-4">
    <v-tab v-for="tab in Tabs" :value="tab.id">{{ tab.text }}</v-tab>
  </v-tabs>
</template>

<script setup>
import { CHECKOUT_TAB, DETAIL_TAB, INFO_TAB } from "@/constants";

const Tabs = [INFO_TAB, DETAIL_TAB, CHECKOUT_TAB];
const model = defineModel();
</script>
