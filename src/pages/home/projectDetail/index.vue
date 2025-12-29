<template>
  <!-- 編輯專案的第一層(parent) -->
  <Title :title />
  <div class="my-8"></div>

  <v-tabs v-model="tabId" align-tabs="start" color="deep-purple-accent-4">
    <v-tab v-for="tab in TABS" :value="tab.id">{{ tab.text }}</v-tab>
  </v-tabs>
  <v-tabs-window v-model="tabId">
    <Info v-if="tabId == 'info'"></Info>
    <Detail v-if="tabId == 'detail'"></Detail>
    <Checkout v-if="tabId == 'checkout'"></Checkout>
  </v-tabs-window>
  <div class="position-fixed right-[2%] bottom-[5%]">
    <v-btn> 新增一筆 Dialog </v-btn>
  </div>
</template>
<script setup lang="ts">
import Title from "@/components/Title/index.vue";
import { INFO_TAB, DETAIL_TAB, CHECKOUT_TAB } from "@/constants";
import Checkout from "./components/Checkout.vue";
import Detail from "./components/Detail.vue";
import Info from "./components/Info.vue";

const TABS = [INFO_TAB, DETAIL_TAB, CHECKOUT_TAB];
const route = useRoute();
const id = computed(() => route.query.id);
const isNew = computed(() => id.value === "new");
const title = computed(() => {
  if (isNew.value) {
    return "新增專案";
  } else {
    return `編輯專案 - ${"專案名稱"}`;
  }
});
const tabId = ref(TABS[0]?.id);
</script>
