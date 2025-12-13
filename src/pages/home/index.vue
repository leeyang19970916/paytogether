<template>
  <Title v-if="menu" :title="menu.title" />
  <div class="my-5 flex justify-between">
    <Filter />
    <v-btn prepend-icon="$vuetify" @click="() => redirect()"> 新建專案 </v-btn>
  </div>
  <div class="grid grid-cols-2 gap-5">
    <Card
      v-for="project in mock_projects"
      :key="`${project.id}${project.title}`"
      :project
      @redirect="redirect"
    />
  </div>
</template>
<script setup lang="ts">
import Title from "@/components/Title/index.vue";
import Filter from "./components/Filter/index.vue";
import Card from "./components/Card";
import { mock_projects } from "@/mock";
import type { Project } from "@/types/project";
import { menus } from "@/router/menus";

const route = useRoute();
const menu = computed(() => {
  const routeName = route.name as string;
  return menus.find((m) => m.name === routeName);
});
const router = useRouter();
const redirect = (id?: Project["id"]) => {
  const pid = id ?? "new";
  // router.push({ name: "projectDetail", params: { id: pid } });
  router.push(`/projectDetail?id=${pid}`);
};
</script>
