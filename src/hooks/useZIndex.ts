import { computed, ref } from "vue";
//堆叠层级更高的显示在前面

const zIndex = ref(0);
const useZIndex = (initialValue = 2000) => {
  const initialZIndex = ref(initialValue);
  const currentZIndex = computed(() => zIndex.value + initialZIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    currentZIndex,
    nextZIndex,
    initialZIndex,
  };
};

export default useZIndex;
