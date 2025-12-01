<template>
  <div class="flex gap-4">
    <v-text-field
      width="344"
      clearable
      label="關鍵字"
      variant="outlined"
      density="compact"
    ></v-text-field>
    <slot />
    <v-btn
      prepend-icon="mdi-magnify"
      variant="tonal"
      @click="
        () => {
          console.log('Search');
        }
      "
    >
      搜尋
    </v-btn>
  </div>
</template>
<script lang="ts" setup></script>
