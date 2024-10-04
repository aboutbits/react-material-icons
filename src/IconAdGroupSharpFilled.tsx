import React from 'react'
import { IconProps } from './types.js'

export const IconAdGroupSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm240-640h480v-80H320v80Z" />
  </svg>
)