<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="model" max-width="600">
      <v-card prepend-icon="mdi-account" :title>
        <div class="py-3 px-6 flex gap-5 flex-col">
          <!-- 可以做成一個套件 塞顏色跟文字 -->
          <div
            class="flex justify-center items-center rounded-[50px] border bg-red-600 w-[100px] h-[100px] text-[20px] mx-auto overflow-hidden"
          >
            {{ nickNameText }}
          </div>
          <div class="flex-col">
            <v-switch
              v-model="user.isPin"
              color="red"
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
            </div>
            <v-textarea
              autocomplete=""
              label="備註:"
              v-model="user.note"
            ></v-textarea>
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
import { MODE_TEXT } from "@/constants";

const model = defineModel({ default: false });
const props = defineProps<{
  mode: Mode;
}>();

const title = computed(() => `${MODE_TEXT[props.mode]} 角色`);
const nickNameText = computed(() => {
  if (user.value.nickName) return user.value.nickName;
  if (user.value.name) {
    return `${user.value.name[0]}`;
  }
  return "預設";
});
const initUser: User = {
  isPin: false,
  id: "",
  nickName: "",
  name: "",
  updateTime: "",
  note: "測試",
  color: "",
  //頭像，直接路徑就可以了
};
const user = ref<User>(structuredClone(initUser));
</script>
<style lang="scss" scoped></style>
