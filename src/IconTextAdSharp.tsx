import React from 'react'
import { IconProps } from './types'

const IconTextAdSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Zm40-40h560v-80H200v80Zm0-160h560v-80H200v80Zm0-160h400v-80H200v80Z" />
  </svg>
)

export { IconTextAdSharp as default }
