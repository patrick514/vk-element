import type { ComponentInternalInstance, VNode } from "vue";

export interface MessageProps {
  message?: string | VNode;
  duration?: number;
  showClose?: boolean;
  type?: "success" | "info" | "warning" | "danger";
  onDestroy: () => void;
  id: string;
  //堆叠层级更高的显示在前面
  zIndex?: number;
  offset?: number;
  transitionName?: string;
}
export interface MessageContext {
  id: string;
  vnode: VNode;
  vm: ComponentInternalInstance;
  props: MessageProps;
  destory: () => void;
}
export type CreateMessageProps = Omit<MessageProps, "onDestroy" | 'id'>;
