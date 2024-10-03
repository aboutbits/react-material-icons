import React from 'react'
import { IconProps } from './types.js'

export const IconTabUnselectedSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-160h160v80h-80v80H80Zm160 480v-80h80v80h-80Zm80-560v-80h80v80h-80Zm80 560v-80h80v80h-80Zm80-400v-240h400v240H480Zm80 400v-80h80v80h-80Zm160 0v-80h80v-80h80v160H720Zm80-240v-80h80v80h-80Z" />
  </svg>
)
