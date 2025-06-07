import React from 'react'
import { IconProps } from './types.js'

export const IconChairAltSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-360h120v-80H200v-280h560v280H640v80h120v360h-80v-120H280v120h-80Zm200-360h160v-80H400v80Z" />
  </svg>
)
