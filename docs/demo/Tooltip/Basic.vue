<script setup>
import Button from "@/components/Button/Button.vue";
import Tooltip from "@/components/Tooltip/Tooltip.vue";
</script>
<template>
  <div class="basic block">
    <Tooltip content="hello tooltip">
      <Button>激活 Tooltip</Button>
    </Tooltip>
  </div>
</template>
