import React from 'react'
import { IconProps } from './types'

export const IconFilter5Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-360h240v-240H520v-80h160v-80H440v240h160v80H440v80ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-240v-480 480Z" />
  </svg>
)
