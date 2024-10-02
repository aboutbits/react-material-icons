import React from 'react'
import { IconProps } from './types'

export const IconChessOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160h560v-80H200v80Zm132-160h296l-23-160H355l-23 160ZM120-80v-160q0-33 23.5-56.5T200-320h52l22-160H160v-80h640v80H686l22 160h52q33 0 56.5 23.5T840-240v160H120Zm151-480-71-320q33 25 68 47t77 22q40 0 73.5-20.5T480-880q28 28 61.5 48.5T615-811q42 0 77-22t68-47l-71 320h-82l39-173-7.5 1q-7.5 1-23.5 1-36 0-70.5-11T480-773q-29 20-62.5 31T349-731q-18 0-26.5-1l-8.5-1 39 173h-82Zm209 80Zm0-80Zm0 400Z" />
  </svg>
)
