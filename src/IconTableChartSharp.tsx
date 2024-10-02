import React from 'react'
import { IconProps } from './types'

export const IconTableChartSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-520h560v-120H200v120Zm0 440h100v-360H200v360Zm460 0h100v-360H660v360Zm-280 0h200v-360H380v360Z" />
  </svg>
)
