import React from 'react'
import { IconProps } from './types.js'

export const IconPagelessSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-80v-320h80v240h280v80H40Zm520 0v-80h280v-240h80v320H560ZM40-560v-320h360v80H120v240H40Zm800 0v-240H560v-80h360v320h-80Z" />
  </svg>
)
