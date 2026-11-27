import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconGroupedBarChartOutlined: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160v-480h160v480H160Zm200 0v-280h160v280H360Zm280 0v-640h160v640H640Z" />
  </svg>
)
