import type { Placement,Options } from "@popperjs/core";
export interface TooltipProps {
  content?: string;
  trigger?: "hover" | "click";
  placement?: Placement;
  //手动调用
  manual?: boolean;
  //定义popper参数 转换为Options
  popperOptions?: Partial<Options>;
  //动画
  transition?: string;
  //打开时延迟
  openDelay?: number;
  //关闭延迟
  closeDelay?: number;
}

export interface TooltipEmits {
  (e: "visible-change", value: boolean): void;
  (e: "click-outside", value: boolean): void;
}
//事件绑定先去掉，暴露实例的属性， 手动调用
export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}
