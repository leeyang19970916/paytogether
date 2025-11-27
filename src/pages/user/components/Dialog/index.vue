<template>
  <v-dialog v-model="model" max-width="600">
    <v-card v-if="user" prepend-icon="mdi-account" :title>
      <div class="py-3 px-6 flex gap-1 flex-col">
        {{ user }}
        <!-- 可以做成一個套件 塞顏色跟文字 -->
        <Avatar :color="user.color" :text="nickNameText" />
        <div class="flex-col">
          <v-switch
            v-model="user.isPin"
            :color="user.color"
            :label="user.isPin ? '釘選' : '未釘選'"
            hide-details
            :disabled="isView"
          ></v-switch>
          <div class="flex gap-5">
            <v-text-field
              v-model="user.name"
              class="max-w-[200px]"
              clearable
              label="Name:"
              variant="outlined"
              density="compact"
              :rules="[]"
              :disabled="isView"
            ></v-text-field>

            <v-text-field
              v-model="user.nickName"
              class="max-w-[170px]"
              clearable
              label="暱稱:"
              variant="outlined"
              density="compact"
              :disabled="isView"
            ></v-text-field>
            <v-text-field
              type="color"
              v-model="user.color"
              class="max-w-[100px]"
              label="Color:"
              variant="outlined"
              density="compact"
              :disabled="isView"
            ></v-text-field>
          </div>
          <v-textarea
            label="備註:"
            v-model="user.note"
            hide-details
            :disabled="isView"
          ></v-textarea>
        </div>
        <div class="text-gray-300 text-sm mt-1">
          最後更新日期: {{ user.updateTime }}
        </div>
      </div>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          v-if="mode === 'edit' || mode === 'view'"
          text="編輯模式"
          variant="plain"
          @click="emits('changeMode', mode)"
        ></v-btn>
        <v-spacer></v-spacer>

        <v-btn text="Close" variant="plain" @click="model = false"></v-btn>

        <v-btn
          v-if="mode === 'create'"
          color="primary"
          text="創建"
          variant="tonal"
          @click="
            () => {
              model = false;
            }
          "
        ></v-btn>
        <v-btn
          v-if="mode === 'edit'"
          color="primary"
          text="編輯"
          variant="tonal"
          @click="
            () => {
              model = false;
            }
          "
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import type { User } from "@/types/user";
import type { Mode } from "@/types";
import { BLACK_COLOR, MODE_TEXT } from "@/constants";
import dayjs from "dayjs";
import Avatar from "@/components/Avatar";
const initUser: User = {
  isPin: false,
  id: "",
  nickName: "",
  name: "",
  updateTime: dayjs().format("YYYY-MM-DD"),
  note: "",
  color: BLACK_COLOR,
  //頭像，直接路徑就可以了
};
const model = defineModel({ default: false });
const props = defineProps<{
  mode: Mode;
  user?: User;
}>();
const emits = defineEmits<{
  changeMode: [mode: Mode];
}>();
const title = computed(() => `${MODE_TEXT[props.mode]}角色`);
const nickNameText = computed(() => {
  if (user.value) {
    if (user.value.nickName) return user.value.nickName;
    if (user.value.name) {
      return `${user.value.name[0]}`;
    }
  }
  return "預設";
});
const user = ref<User | undefined>(props.user);
const isView = computed(() => props.mode === "view");

// class
watch(
  () => props.user,
  (val) => {
    console.log(props.user);
    if (props.mode === "create") {
      user.value = structuredClone(initUser);
    } else {
      user.value = val;
    }
  },
  { immediate: true }
);
</script>
<style lang="scss" scoped></style>
