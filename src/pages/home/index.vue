<template>
  <Title />
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
import type { User } from "@/types/user";
const router = useRouter();
const redirect = (id?: User["id"]) => {
  const pid = id ?? "new";
  router.push({ name: "projectDetail" as any, params: { id: pid } });
};
</script>
