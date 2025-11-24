<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="model" max-width="600">
      <v-card prepend-icon="mdi-account" :title>
        <div class="py-3 px-6 flex gap-1 flex-col">
          <!-- 可以做成一個套件 塞顏色跟文字 -->
          <Avatar :color="user.color" :text="nickNameText" />
          <div class="flex-col">
            <v-switch
              v-model="user.isPin"
              :color="user.color"
              :label="user.isPin ? '釘選' : '未釘選'"
              hide-details
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
              ></v-text-field>

              <v-text-field
                v-model="user.nickName"
                class="max-w-[170px]"
                clearable
                label="暱稱:"
                variant="outlined"
                density="compact"
              ></v-text-field>
              <v-text-field
                type="color"
                v-model="user.color"
                class="max-w-[100px]"
                label="Color:"
                variant="outlined"
                density="compact"
              ></v-text-field>
            </div>
            <v-textarea
              label="備註:"
              v-model="user.note"
              hide-details
            ></v-textarea>
          </div>
          <div class="text-gray-300 text-sm mt-1">
            最後更新日期: {{ user.updateTime }}
          </div>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="model = false"></v-btn>

          <v-btn
            color="primary"
            text="Save"
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
  </div>
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

const user = ref<User>();
watch(
  () => props.user,
  (val) => {
    if (val) {
      user.value = val;
    }
  }
);
// watch(
//   () => user.value?.color,
//   (val) => {
//     if (!val) {
//       user.value.color = initUser.color;
//     }
//   }
// );
</script>
<style lang="scss" scoped></style>
