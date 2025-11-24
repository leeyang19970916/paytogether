<template>
  <v-card
    v-if="user"
    elevation="1"
    hover
    class="!rounded-lg h-[180px] !flex !flex-col !justify-center !gap-5 !items-center"
    :class="{ '': user.isPin }"
    link
    @click="emits('showDialog', user)"
  >
    <Avatar
      :color="user.color"
      :text="user.nickName"
      class="!w-[75px] !h-[75px] !text-[1rem]"
    />
    <div class="text-center">{{ user.name }} ( {{ user.nickName }} )</div>
  </v-card>
</template>

<script setup lang="ts">
import type { User } from "@/types/user";
import Avatar from "@/components/Avatar";
const props = defineProps<{
  user: User;
}>();
// flex flex-col items-center !gap-[1rem] justify-between !py-[1rem]
const emits = defineEmits<{
  showDialog: [user: User];
}>();
</script>

<!-- <style scoped>
.pin {
  @apply border border-amber-300;
}
</style> -->
