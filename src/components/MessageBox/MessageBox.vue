<template>
  <div class="vk-message-box" v-show="state.visible">
    <div class="vk-message-box-wrapper">
      <div class="vk-message-box-title">
        <h1>title</h1>

        <span class="vk-message-box-close" @click="handleAction('close')">
          <el-icon icon="xmark"></el-icon>
        </span>
      </div>
      <div class="vk-message-box-content">
        <p>content</p>
      </div>
      <div class="vk-message-box-btns">
        <Button @click="handleAction('confirm')">confirm</Button>
        <Button type="danger" @click="handleAction('cancel')">cancel</Button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import { ref, reactive } from "vue";
import { type ActionType, type MessageBoxOptions } from "./types";
import Button from "../Button/Button.vue";
defineOptions({
  name: "VkMessageBox",
});

const state = reactive({
  visible:true,
  type:'',

})
const setVisible = (visible:boolean) =>{
  state.visible = visible
}
const props = defineProps<MessageBoxOptions>();
const closeModal = ()=>{
  if(!state.type) return
  setVisible(false)
}
const handleAction = (action: ActionType) => {
  state.type = action
  closeModal()

};
</script>
<style lang="less" scoped></style>
