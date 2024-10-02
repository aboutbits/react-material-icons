import React from 'react'
import { IconProps } from './types'

export const IconGateOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-280v-400h80v400H80Zm120 80v-400q0-66 47-113t113-47h240q66 0 113 47t47 113v400H200Zm600-80v-400h80v400h-80ZM480-480ZM280-280h160v-160h-80v-80h80v-160h-80q-33 0-56.5 23.5T280-600v320Zm240 0h160v-320q0-33-23.5-56.5T600-680h-80v160h80v80h-80v160Z" />
  </svg>
)
