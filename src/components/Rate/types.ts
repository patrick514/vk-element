export type RateSize = "large" | "default" | "small";


export interface RateProps {
  //选中个数
  nums?: number;
  size?: RateSize;
  // 最大个数
  max?: number;
  color?: "";
  // 未选中星星的颜色
  voidColor?: "";
}

// 定义星级评分组件的Emits
export interface RateEmits{
  (e:'changeRateNums',value:number) : void
}
