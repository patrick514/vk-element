<template>
  <div class="vk-dropdown">
    <Tooltip
      :trigger="trigger"
      :placement="placement"
      :popper-options="popperOptions"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :manual="manual"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <slot></slot>
      <template #content>
        <ul class="vk-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li v-if="item.divided" role="separator" class="divided-placeholder" />
            <li
              class="vk-dropdown__item"
              @click="itemClick(item)"
              :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }"
              :id="`dropdown-item-${item.key}`"
            >
              <!-- {{ item.label }} -->
              <RenderVnode :vNode="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import type { DropdownEmits, DropdownInstance, DropdownProps, MenuOptions } from "./types";
import Tooltip from "../Tooltip/Tooltip.vue";
import { ref } from "vue";
import type { TooltipInstance } from "../Tooltip/types";
import RenderVnode from "../Common/RenderVnode";

defineOptions({
  name: "VkDropdown",
});
// const props = defineProps<DropdownProps>();
const props = withDefaults(defineProps<DropdownProps>(), { hideAfterClick: true });
const emits = defineEmits<DropdownEmits>();
const tooltipRef = ref<TooltipInstance | null>(null);
const visibleChange = (e: boolean) => {
  emits("visible-change", e);
};

const itemClick = (e: MenuOptions) => {
  if (e.disabled) return;
  emits("select", e);
  if (props.hideAfterClick) {
    tooltipRef.value?.hide();
  }
};
defineExpose<DropdownInstance>({
    //这里要闭包
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide(),
});
</script>

<style></style>
