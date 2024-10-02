import React from 'react'
import { IconProps } from './types'

export const IconSpeed075SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-280v-80h80v80h-80Zm360 0v-80h160v-80H560v-240h240v80H640v80h160v240H560Zm-200 0 80-320H280v-80h240v72l-80 328h-80Z" />
  </svg>
)
