export type SelectValueType = boolean | string | number;
export interface SelectOptions {
  label: string;
  value: SelectValueType;
  disabled?: boolean;
}

export interface SelectProps {
  modelValue: SelectValueType;

  options: SelectOptions[];
  placeholder: string;
  disabled: boolean;
}
//被选中
export interface SelectStates {
  inputValue: string;
  selectedOption: null | SelectOptions;
}

export interface SelectEmits {
  (e: "change", value: SelectValueType): void;
  (e: "updata:modelValue", value: SelectValueType): void;
  (e: "visible-change", value: boolean): void;
}
