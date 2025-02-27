<template>
  <Input
    v-model="test"
    placeholder="可以是一个 Textarea"
    type="textarea"
  ></Input>
</template>

<script setup>
import { ref } from 'vue';
import Input from '@/components/Input/Input.vue'

const test = ref('');
</script>
