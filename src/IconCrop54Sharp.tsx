import React from 'react'
import { IconProps } from './types'

export const IconCrop54Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160v-640h720v640H120Zm80-80h560v-480H200v480Zm0 0v-480 480Z" />
  </svg>
)
