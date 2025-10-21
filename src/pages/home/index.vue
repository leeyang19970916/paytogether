<template>
  <Title :title="TITLE" />
</template>
<script setup lang="ts">
import Title from "@/components/Title/index.vue";
const TITLE = "記帳表";
// const rules = [
//   (value) => !!value || "Required.",
//   (value) => (value && value.length >= 3) || "Min 3 characters",
// ];
type User = {
  id: string;
  name: string;
  color: string;
  isDisabled: boolean;
};
</script>
// TODO -

<!-- <template>
    <div>
      <v-text-field hide-details="auto" label="Main input"></v-text-field>
    </div>
  </template> -->
