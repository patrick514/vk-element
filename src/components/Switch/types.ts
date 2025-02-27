export type SwitchValueType = boolean | string | number;
export interface SwtichProps {
  modelValue: boolean;
  disabled?: boolean;
  activeText?: string;
  inactiveText?: string;
  activeValue?: string;
  inactiveValue?: string;
  name?: string;
  id?: string;
  size?: "small" | "large";
}

export interface SwtichEmits {
  (e: "update:modelValue", value: boolean): void;
  (e: "change", value: boolean): void;
}
