import React from 'react'
import { IconProps } from './types.js'

export const IconShelfPositionSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-80h560v-120H200v120Zm460-200h100v-360H660v360Zm-460 0h100v-360H200v360Zm180 0h200v-360H380v360Z" />
  </svg>
)
