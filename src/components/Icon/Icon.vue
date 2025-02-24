<template>
  <i class="vk-icon"
    :class="{[`vk-icon--${type}`]:type}"
    :style="customStyles"
    v-bind="$attrs">
    <font-awesome-icon v-bind="filterdProps" />
  </i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { IconProps } from "./types";
import { omit } from "lodash-es";
import { computed } from "vue";
defineOptions({
  name: "VkIcon",
  inheritAttrs: false,
});
//2
const props = defineProps<IconProps>();
//只会运行一次 
// const filterdProps = omit(props, ["type", "color"]);
const filterdProps = computed(()=>
    omit(props, ["type", "color"])
) 

const customStyles = computed(()=>{
    return props.color ? {color:props.color} : {}
})
</script>

<style></style>
