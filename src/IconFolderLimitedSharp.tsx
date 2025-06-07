import React from 'react'
import { IconProps } from './types.js'

export const IconFolderLimitedSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h320l80 80h400v560H80Zm80-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Zm320-40q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm-46-248q11-5 22-8.5t24-3.5q42 0 71 29t29 71q0 13-3.5 24t-8.5 22L434-528Zm46 188q-42 0-71-29t-29-71q0-13 3.5-24t8.5-22l134 134q-11 5-22 8.5t-24 3.5Z" />
  </svg>
)
