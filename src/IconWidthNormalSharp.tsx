import React from 'react'
import { IconProps } from './types'

export const IconWidthNormalSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm80-80h160v-480H160v480Zm240 0h160v-480H400v480Zm240 0h160v-480H640v480ZM400-720v480-480Z" />
  </svg>
)
