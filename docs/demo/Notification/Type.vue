<template>
  <Button plain @click="open1">Success</Button>
  <Button plain @click="open2">Warning</Button>
  <Button plain @click="open3">Info</Button>
  <Button plain @click="open4">Error</Button>
</template>

<script lang="ts" setup>
import { createNotification } from '@/components/Notification';
import Button from '@/components/Button/Button.vue'

const open1 = () => {
  createNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success'
  });
};

const open2 = () => {
  createNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning'
  });
};

const open3 = () => {
  createNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info'
  });
};

const open4 = () => {
  createNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'danger'
  });
};
</script>
