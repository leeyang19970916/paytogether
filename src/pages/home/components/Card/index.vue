<template>
  <v-card
    class="w-full"
    elevation="16"
    hover
    @click="emits('redirect', project.id)"
  >
    <v-card-item>
      <div class="!flex justify-between">
        <v-card-title> {{ project.title }} </v-card-title>
        <PinIcon v-if="project.isPin" />
      </div>
    </v-card-item>

    <v-card-text>
      <div>
        {{ project.notes }}
      </div>
      <div class="flex justify-between">
        <div>參與人數：{{ project.users.length }} 人</div>
        <div>{{ project.updatedTime }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script lang="ts" setup>
import type { Project } from "@/types/project";
import type { User } from "@/types/user";
import PinIcon from "@/components/PinIcon";

defineProps<{
  project: Project;
}>();
const emits = defineEmits<{
  redirect: [id: User["id"]];
}>();
</script>
