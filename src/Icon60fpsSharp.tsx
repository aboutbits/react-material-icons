import React from 'react'
import { IconProps } from './types'

export const Icon60fpsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-200v-560h320v120H200v80h240v360H80Zm120-120h120v-120H200v120Zm400 0h160v-320H600v320ZM480-200v-560h400v560H480Z" />
  </svg>
)
