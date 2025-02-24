<template>
  <Transition name="vk-alert-fade">
    <div
      class="vk-alert"
      :class="{
        [`vk-alert--${type}`]: type,
        [`vk-alert--${effect}`]: effect,
      }"
      v-if="alertShow"
    >
      <div class="vk-alert__content">
        <span><slot></slot></span>
      </div>
      <div class="vk-alert__close" v-if="closable" @click="closeAlert">
        <Icon icon="xmark"></Icon>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { AlertProps } from "./types";
import type { AlertEmits } from "./types";

import Icon from "../Icon/Icon.vue";
defineOptions({
  name: "VkAlert",
});
withDefaults(defineProps<AlertProps>(), {
  type: "info",
  effect: "light",
  closable: true,
});
const emit = defineEmits<AlertEmits>();
const alertShow = ref<boolean>(true);
const closeAlert = () => {
  alertShow.value = false;
  emit("close");
};
</script>

<style></style>
