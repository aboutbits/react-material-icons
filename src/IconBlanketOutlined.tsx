import React from 'react'
import { IconProps } from './types.js'

export const IconBlanketOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-50 0-85-35t-35-85v-480q0-50 35-85t85-35h320q50 0 85 35t35 85v252h40q33 0 56.5 23.5T720-388v128q0 8 6 14t14 6q8 0 14-6t6-14v-260q-33 0-56.5-23.5T680-600v-120h40v-80h60v80h40v-80h60v80h40v120q0 33-23.5 56.5T840-520v256q0 42-29 71t-71 29q-42 0-71-29t-29-71v-128h-40v112q0 66-47 113t-113 47H160Zm0-80h280q33 0 56.5-23.5T520-280q0-33-23.5-56.5T440-360H260q-8 0-14 6t-6 14q0 8 6 14t14 6h180q17 0 28.5 11.5T480-280q0 17-11.5 28.5T440-240H260q-42 0-71-29t-29-71q0-42 29-71t71-29h180q21 0 41.5 6t38.5 18v-304q0-17-11.5-28.5T480-760H160q-17 0-28.5 11.5T120-720v480q0 17 11.5 28.5T160-200Zm0 0h280-320 40Z" />
  </svg>
)
