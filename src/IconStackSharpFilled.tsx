import React from 'react'
import { IconProps } from './types'

export const IconStackSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-400v80H80v-560h560v160h-80v-80H160v400h80Zm80 320v-560h560v560H320Z" />
  </svg>
)
