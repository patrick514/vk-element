<template>
  <Button type="primary" @click="open">创建一条带图标的通知</Button>
</template>

<script setup>
import { createNotification } from '@/components/Notification';
import Button from '@/components/Button/Button.vue'

const open = () => {
  createNotification({
    title: 'this is the title',
    message: 'hello world',
    icon: 'star'
  });
};
</script>
