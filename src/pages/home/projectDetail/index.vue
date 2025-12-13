<template>
  <Title :title />
  <div class="my-8"></div>

  {{ tab }}
  <Tabs v-model="tab" />
  <v-tabs-window v-model="tab">
    <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
      <v-container fluid>
        <v-row>
          <v-col v-for="i in 6" :key="i" cols="12" md="4">
            <v-img
              :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
              :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
              height="205"
              cover
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-tabs-window-item>
  </v-tabs-window>
</template>
<script setup lang="ts">
import Title from "@/components/Title/index.vue";
import Tabs from "./components/Tabs";
import { INFO_TAB, DETAIL_TAB, CHECKOUT_TAB } from "@/constants";

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
const tab = ref(1);
</script>
