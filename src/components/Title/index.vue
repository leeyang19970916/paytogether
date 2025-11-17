<template>
  <h1 class="title">{{ menu?.title }}</h1>
</template>
<script setup lang="ts">
import { menus } from '@/router/menus'
const router=useRouter()
const menu=computed(()=> menus.find(itm=>itm.name===
router.currentRoute.value.name))
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
