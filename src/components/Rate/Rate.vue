<template>
  <div class="el-rate" :style="{ color: voidColor }">
    <span v-for="num in max"
    class="iconfont icon-star"
    :key="num"
    :class="{
      active: num <=rateNum, [`vk-rate--${size}`] : true
    }"
    :style="{
      'color':num <= rateNum ? color : voidColor
    }"
    @click="setRateNum(num)"></span>
  </div>
</template>

<script setup lang="ts">
import { type RateEmits, type RateProps } from './types';
import { useRate } from './useRate';
defineOptions({
  name:'VkRate'
})

const props = withDefaults(defineProps<RateProps>(),{
  nums:3,
  size:'default',
  max:5,
})

const emits = defineEmits<RateEmits>()

const [rateNum, setRateNum] = useRate(props.nums,()=>{
  emits('changeRateNums',rateNum.value)
})
</script>
