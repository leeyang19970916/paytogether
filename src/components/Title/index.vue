<template>
  <h1 class="title">{{ title }}</h1>
  <!-- {{ router.currentRoute.value.name }} -->
  <!-- {{ route.name }} -->
</template>
<script setup lang="ts">
// import { menus } from "@/router/menus";
// const route = useRoute();
// const router = useRouter();
// const routeName = route.name as string;
// const menu = computed(() => {
//   return menus.find((m) => m.name === routeName)?.title;
// });{}
defineProps<{
  title: string;
}>();
</script>

<style scoped>
.title {
  padding-bottom: 8px;
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 24px;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
