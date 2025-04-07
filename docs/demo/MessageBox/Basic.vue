<template>
  <el-button @click="showMessageBox">showMessageBox</el-button>
</template>
<script setup lang="ts">
import ElMessageBox from '@/components/MessageBox/MessageBox'

import ElButton from '../../../src/components/Button/Button.vue'

const showMessageBox = () => {
  ElMessageBox({
    // 确认文字、标题和内容
    confirmBtnText: 'Ok',
    title: 'MessageBox',
    content: 'This is ConfirmMessageBox content'
  }).then(() => {
    console.log('MessageBox resolve')
  }).catch(() => {
    console.log('MessageBox reject')
  })
}
</script>
