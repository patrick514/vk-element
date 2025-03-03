
<template>
  <div class="container">
    <Form :model="model" ref="formRef">
      <FormItem prop="email" label="the email">
        <Input v-model="model.email" />
      </FormItem>
      <FormItem prop="password" label="the password">
        <Input v-model="model.password" type="password" />
      </FormItem>
      <FormItem prop="agreement" label="agreement">
        <Switch v-model="model.agreement" />
      </FormItem>
      <FormItem prop="zone" label="zone">
        <Select v-model="model.zone" :options="options" />
      </FormItem>
      <FormItem>
        <Button @click.prevent="submit" type="primary">Submit</Button>
        <Button @click.prevent="reset">Reset</Button>
      </FormItem>
    </Form>
  
    <p style="margin: 20px 25%; width: fit-content;">
      form value:
      <pre>{{model}}</pre>
    </p>
  </div>
  </template>

<script setup>
import { reactive, ref } from 'vue';
import Form from "@/components/Form/Form.vue";
import FormItem from "@/components/Form/FormItem.vue";
import Button from "@/components/Button/Button.vue";
import Input from "@/components/Input/Input.vue";
import Switch from "@/components/Switch/Switch.vue";
import Select from "@/components/Select/Select.vue";
const model = reactive({
  email: '',
  password: '',
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
<style scoped>

</style>