import React from 'react'
import { IconProps } from './types.js'

export const IconDeleteSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM200-120v-600h-40v-80h200v-40h240v40h200v80h-40v600H200Z" />
  </svg>
)
