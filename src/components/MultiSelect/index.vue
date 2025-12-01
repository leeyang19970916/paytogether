<template>
  <v-select
    v-model="value"
    :items="items"
    class="min-w-[300px]"
    label="選擇成員"
    placeholder="請選擇成員"
    chips
    clearable
    multiple
  ></v-select>
</template>
<script setup>
import { shallowRef } from "vue";

const items = shallowRef(["foo", "bar", "fizz", "buzz"]);
const value = shallowRef(["foo", "bar", "fizz", "buzz"]);
</script>
