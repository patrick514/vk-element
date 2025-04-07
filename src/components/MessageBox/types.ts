export interface MessageBoxOptions {
  title?: string;
  content?: string;
  showCancleBtn?: boolean;
  cancelBtnText?: string;
  confirmBtnText?: string;
  field?: string;
  closeOnClickModal?: boolean;
  [key: string]: unknown;
}

// 用户操作类型
export type ActionType = "confirm" | "cancel" | "close";
