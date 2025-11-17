<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="model" max-width="600">
      <v-card prepend-icon="mdi-account" :title>
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="4" sm="6">
              <v-text-field label="name" required></v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-switch
              v-model="user.isPin"
              :label="`Switch: ${user.isPin.toString()}`"
              hide-details
              inset
            ></v-switch>
          </v-row>
          <v-row dense>
            <v-textarea
              class="mb-2"
              rows="2"
              variant="outlined"
              persistent-counter
            ></v-textarea>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="model = false"></v-btn>

          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="model = false"
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

const title = computed(() => {
  return `${MODE_TEXT[props.mode]}角色`;
});
const user = ref<User>({
  isPin: false,
  id: "",
  name: "",
  updateTime: "",
  note: "",
  avatar_url: "", //頭像，直接路徑就可以了
});
</script>
