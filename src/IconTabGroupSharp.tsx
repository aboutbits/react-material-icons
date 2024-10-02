import React from 'react'
import { IconProps } from './types'

export const IconTabGroupSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240v-640h640v640H240Zm80-80h480v-320H520v-160H320v480ZM80-80v-640h80v560h560v80H80Zm240-720v480-480Z" />
  </svg>
)
