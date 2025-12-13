<template>
  <Title :title />
  <div class="my-8"></div>

  <v-tabs v-model="tab" align-tabs="start" color="deep-purple-accent-4">
    <v-tab v-for="tab in TABS" :value="tab.id">{{ tab.text }}</v-tab>
  </v-tabs>
  <v-tabs-window v-model="tab">
    <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
      {{ n }}
    </v-tabs-window-item>
  </v-tabs-window>
</template>
<script setup lang="ts">
import Title from "@/components/Title/index.vue";
import Tabs from "./components/Tabs";
import { INFO_TAB, DETAIL_TAB, CHECKOUT_TAB } from "@/constants";

const TABS = [INFO_TAB, DETAIL_TAB, CHECKOUT_TAB];
const route = useRoute();
const id = computed(() => route.query.id);
const isNew = computed(() => id.value === "new");
const title = computed(() => {
  if (isNew.value) {
    return "新增專案";
  } else {
    return "編輯專案";
  }
});
const tab = ref(INFO_TAB.id);
</script>
