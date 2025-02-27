
<template>
  <div>
    <vk-form :model="model" ref="formRef">
      <vk-form-item prop="email" label="the email">
        <vk-input v-model="model.email" />
      </vk-form-item>
      <vk-form-item prop="password" label="the password">
        <vk-input v-model="model.password" type="password" />
      </vk-form-item>
      <vk-form-item prop="agreement" label="agreement">
        <vk-switch v-model="model.agreement" />
      </vk-form-item>
      <vk-form-item prop="zone" label="zone">
        <vk-select v-model="model.zone" :options="options" />
      </vk-form-item>
      <vk-form-item>
        <vk-button @click.prevent="submit" type="primary">Submit</vk-button>
        <vk-button @click.prevent="reset">Reset</vk-button>
      </vk-form-item>
    </vk-form>
  
    <p>
      form value:
      <pre>{{model}}</pre>
    </p>
  </div>
  </template>

<script setup>
import { reactive, ref } from 'vue';

const model = reactive({
  email: '',
  password: '',
  confirmPwd: '',
  agreement: false,
  zone: ''
})

const options = [
  { label: 'zone 1', value: 'one' },
  { label: 'zone 2', value: 'two' },
  { label: 'zone 3', value: 'three' }
]

const formRef = ref()

const submit = async () => {
  alert('submitted!')
}

const reset = () => {
  formRef.value.resetFields()
}
</script>
