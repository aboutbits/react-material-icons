import React from 'react'
import { IconProps } from './types'

export const IconFluidBalanceSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v80H160v480h320v80H80Zm80-80v-480 480ZM880-40H680v-124q-69-14-114.5-68.5T520-360v-280h400v280q0 73-45.5 127.5T760-164v44h120v80Zm-90-360h50v-160H600v80h30q33 0 62.5 15t49.5 41q8 12 21 18t27 6Zm-70 160q39 0 70-22.5t43-57.5h-43q-33 0-62.5-14.5T678-376q-9-11-21.5-17.5T630-400h-30v40q0 51 34.5 85.5T720-240Zm-42-184Zm-438-96h200v-80H240v80Zm0 160h200v-80H240v80Z" />
  </svg>
)
