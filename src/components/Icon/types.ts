import type { FontAwesomeIconProps } from "@fortawesome/vue-fontawesome";
//1
export interface IconProps extends FontAwesomeIconProps {
  
  type?: 'primary'| 'success'| 'warning'| 'danger'| 'info'
  color?: string
}