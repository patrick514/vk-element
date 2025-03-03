import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import type { App } from "vue";
import Button from "@/components/Button";
import Icon from "../src/components/Icon/Icon.vue";
import Alert from "@/components/Alert";
import { Collapse, CollapseItem } from "@/components/Collapse";
import Tooltip from "@/components/Tooltip";
import Dropdown from "@/components/Dropdown";
import Message from "@/components/Message";
import Notification from "./components/Notification";
import Input from "./components/Input";
import Switch from "./components/Switch";
import Select from "./components/Select";
import { Form, FormItem } from "./components/Form";
import { createMessage } from "@/components/Message";
import { createNotification } from "@/components/Notification";

import "./styles/index.css";

library.add(fas);

const components = [
  Button,
  Icon,
  Alert,
  Collapse,
  CollapseItem,
  Tooltip,
  Dropdown,
  Message,
  Notification,
  Input,
  Switch,
  Select,
  Form,
  FormItem,
];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name!, component);
  });
};

/** 这里将组件导出，是为了在单独使用组件时，可以按需引入 */
export {
  Button,
  Icon,
  Alert,
  Collapse,
  CollapseItem,
  Tooltip,
  Dropdown,
  Message,
  Notification,
  Input,
  Switch,
  Select,
  Form,
  FormItem,
  createMessage,
  createNotification,
};

export default {
  install,
};

/**
 * 这里是重点，需要将这些组件在ts中声明为全局组件；
 */
declare module "vue" {
  export interface GlobalComponents {
    Button: typeof Button;
    Icon: typeof Icon;
    Alert: typeof Alert;
    Collapse: typeof Collapse;
    CollapseItem: typeof CollapseItem;
    Tooltip: typeof Tooltip;
    Dropdown: typeof Dropdown;
    Message: typeof Message;
    Notification: typeof Notification;
    Input: typeof Input;
    Switch: typeof Switch;
    Select: typeof Select;
    Form: typeof Form;
    FormItem: typeof FormItem;
  }
}
