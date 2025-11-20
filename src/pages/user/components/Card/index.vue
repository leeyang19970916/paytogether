<template>
  <v-card
    title="Card title"
    subtitle="Subtitle"
    text="..."
    elevation="16"
    hover
    class="!rounded-lg"
    link
  >
    <v-card-actions>
      {{ user?.name }}
      <v-btn>Click me</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { User } from "@/types/user";
const props = defineProps<{
  user: User;
}>();
</script>

<style scoped></style>
