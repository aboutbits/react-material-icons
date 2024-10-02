import React from 'react'
import { IconProps } from './types'

export const IconPalletSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-160h800v160H760v-80H540v80H420v-80H200v80H80Zm120-240v-560h560v560H200Zm80-80h400v-400H280v400Zm80-240h240v-80H360v80Zm-80 240v-400 400Z" />
  </svg>
)
