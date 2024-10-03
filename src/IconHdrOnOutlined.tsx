import React from 'react'
import { IconProps } from './types.js'

export const IconHdrOnOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-360v-240h140q24 0 42 18t18 42v40q0 23-10.5 35.5T804-444l36 84h-60l-36-80h-44v80h-60Zm60-140h80v-40h-80v40ZM120-360v-240h60v80h80v-80h60v240h-60v-100h-80v100h-60Zm260 0v-240h140q24 0 42 18t18 42v120q0 24-18 42t-42 18H380Zm60-60h80v-120h-80v120Z" />
  </svg>
)
