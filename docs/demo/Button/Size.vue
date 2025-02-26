<script setup>
import Button from '@/components/Button/Button.vue'
// import Icon from '@/components/Icon/Icon.vue'

</script>
<template>
  <div class="size block">
    <Button size="large">Large</Button>
    <Button>Default</Button>
    <Button size="small">Small</Button>
    <Button size="large" icon="search">Search</Button>
    <Button icon="search">Search</Button>
    <Button size="small" icon="search">Search</Button>
  </div>
  <div class="size block">
    <Button size="large" round>Large</Button>
    <Button round>Default</Button>
    <Button size="small" round>Small</Button>
    <Button size="large" icon="search" round>Search</Button>
    <Button icon="search" round>Search</Button>
    <Button size="small" icon="search" round>Search</Button>
  </div>
  <div class="size">
    <Button icon="search" size="large" circle />
    <Button icon="search" circle />
    <Button icon="search" size="small" circle />
  </div>
</template>