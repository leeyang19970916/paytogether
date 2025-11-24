<template>
  <div
    class="flex justify-center items-center rounded-circle border w-[150px] h-[150px] text-[20px] mx-auto overflow-hidden"
    :style="{ backgroundColor: color }"
  >
    {{ text }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  color: string;
  text: string;
}>();
</script>
