<template>
  <Button plain @click="open">Hide close button</Button>
</template>

<script lang="ts" setup>
import { createNotification } from '@/components/Notification';
import Button from '@/components/Button/Button.vue'

const open = () => {
  createNotification({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
    duration: 2000
  });
};
</script>
