<template>
  <div class="vk-select" :class="{ 'is-disabled': disabled }" @click="toggleDropdown">
    <Tooltip
      :popper-options="popperOptions"
      @click-outside="controlDropdown(false)"
      ref="tooltipRef"
      placement="bottom-start"
      manual
    >
      <Input
        ref="inputRef"
        v-model="states.inputValue"
        :disabled="disabled"
        :placeholder="placeholder"
        readonly
      >
        <template #suffix>
          <Icon
            icon="angle-down"
            class="header-angle"
            :class="{
              'is-active': isDropdownShow,
            }"
          ></Icon>
        </template>
      </Input>
      <template #content>
        <ul class="vk-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li
              class="vk-select__menu-item"
              :class="{
                'is-disabled': item.disabled,
                'is-selected': item.value === states.selectedOption?.value,
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              {{ item.label }}
              <!-- <span v-if="item.value === states.selectedOption?.value">slect</span> -->
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import Tooltip from "../Tooltip/Tooltip.vue";
import type { SelectEmits, SelectOptions, SelectProps, SelectStates, SelectValueType } from "./types";
import Input from "../Input/Input.vue";
import type { TooltipInstance } from "../Tooltip/types";
import { reactive, ref, Ref } from "vue";
import type { InputInstance } from "../Input/types";
import Icon from "../Icon/Icon.vue";
defineOptions({
  name: "VkSelect",
});
const props = defineProps<SelectProps>();
const emits = defineEmits<SelectEmits>();
const findOption = (value: SelectValueType) => {
  if (!props.options) return null;
  
  const option = props.options.find((option) => option.value === value);
  return option ? option : null;
};
const initialOption = findOption(props.modelValue);
const tooltipRef = ref() as Ref<TooltipInstance>;
const inputRef = ref() as Ref<InputInstance>;
const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : "",
  selectedOption: initialOption,
});
//默认是关闭下拉框
const isDropdownShow = ref(false);
//使下拉框宽度与选择框一致
const popperOptions: any = {
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 9],
      },
    },
    {
      name: "sameWidth",
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: "beforeWrite",
      requires: ["computeStyles"],
    },
  ],
};
// const innerValue = ref(initialOption ? initialOption.label : "");
const controlDropdown = (show: boolean) => {
  if (show) {
    tooltipRef.value.show();
  } else {
    tooltipRef.value.hide();
  }
  isDropdownShow.value = show;
  emits("visible-change", show);
};

const toggleDropdown = () => {
  if (props.disabled) return;
  if (isDropdownShow.value) {
    controlDropdown(false);
  } else {
    controlDropdown(true);
  }
};
const itemSelect = (e: SelectOptions) => {
  if (e.disabled) return;
  states.inputValue = e.label;
  states.selectedOption = e;
  console.log(typeof(e.value))
  emits("change", e.value);
  emits("updata:modelValue", e.value);
  controlDropdown(false);
  inputRef.value.ref.focus();
};
</script>

<style></style>
