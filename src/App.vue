<script setup lang="ts">
import { onMounted, ref } from "vue";
import { createPopper, type Instance, type Options } from "@popperjs/core";
import Button from "./components/Button/Button.vue";
import Collapse from "./components/Collapse/Collapse.vue";
import Item from "./components/Collapse/CollapseItem.vue";
import Icon from "./components/Icon/Icon.vue";
import Tooltip from './components/Tooltip/Tooltip.vue'
import type { ButtonInstance } from "./components/Button/types";
import Alert from "./components/Alert/Alert.vue";
import type { TooltipInstance } from "./components/Tooltip/types";
const overlayNode = ref<HTMLElement>();
const triggerNode = ref<HTMLElement>();
const trigger = ref<any>('hover')
let popperInstance: Instance | null = null
const buttonref = ref<ButtonInstance | null>(null);
const tooltipRef = ref<TooltipInstance | null>(null);
const options:Partial<Options> = {placement:'right-end',strategy:'fixed'}
// const openvalue = ref(["a", "b"]);
const size = ref<
  | "3x"
  | "2xs"
  | "xs"
  | "sm"
  | "lg"
  | "xl"
  | "2xl"
  | "1x"
  | "2x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x"
>("3x");

const open = () => {
  // createMessage({ message: 'hello world', duration: 0, showClose: true })
  tooltipRef.value?.show()
}
const close = () => {
  tooltipRef.value?.hide()
}
onMounted(() => {
  if (buttonref.value) {
    console.log("buttonref", buttonref.value);
  }
  if (overlayNode.value && triggerNode.value) {
    popperInstance = createPopper(triggerNode.value, overlayNode.value, { placement: "right" });
    console.log('pporer')
  }
  setTimeout(() => {
    size.value = "2xl";
    popperInstance?.setOptions({ placement: 'left' })

  }, 2000);
});
</script>

<template>
  <main>
    <header>
      <Tooltip placement="right" content="hello" :trigger="trigger"  ref="tooltipRef" :open-delay="1000" :close-delay="1000">
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

      </Tooltip>
    </header>



    <!-- <Icon :icon="['fas', 'house']" type="primary" color="#0e7a0d" />
    <Icon :icon="['fas', 'house']" type="danger" :size="size" /> -->

    <Button ref="buttonRef" @click="open">Test Button</Button>
    <Button plain @click="close">Plain Button</Button>
    <!-- <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br /> -->

    <!-- <Alert type="success">Primary</Alert>
    <Alert type="danger">Danger</Alert>
    <Alert type="info">Info</Alert>
    <Alert type="warning">Warning</Alert>
    <Alert type="success" effect="dark">Primary</Alert>
    <Alert type="danger" effect="dark">Danger</Alert>
    <Alert type="info" effect="dark">Info
      <div>
        <h1>fdasffdasf</h1>
        <h2>fdas</h2>
      </div>
    </Alert>

    <Alert type="warning" effect="dark" :closable="false">Warning cant close</Alert>
    <Collapse v-model="openvalue" accordion>
      <Item name="a" title="Title A">
        <div>this is content a aaa</div>
      </Item>
      <Item name="b" title="Title B">
        <div>this is bbbbb test</div>
      </Item>
      <Item name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </Item>
    </Collapse>  -->

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  border: 1px solid green;
  margin: 0 auto;
}

.vk-tooltip__popper {
  border: 1px solid red;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
