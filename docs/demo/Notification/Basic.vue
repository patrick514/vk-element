<template>
  <Button plain @click="open1">Closes automatically</Button>
  <Button plain @click="open2">Won't close automatically</Button>
</template>

<script setup>
import { h } from 'vue';
import { createNotification } from '@/components/Notification';
import Button from '@/components/Button/Button.vue'

const open1 = () => {
  createNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder')
  });
};

const open2 = () => {
  createNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0
  });
};
</script>
