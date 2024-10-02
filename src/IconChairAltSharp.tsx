import React from 'react'
import { IconProps } from './types'

export const IconChairAltSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-360h120v-80H200v-280h560v280H640v80h120v360h-80v-120H280v120h-80Zm80-520h400v-120H280v120Zm120 160h160v-80H400v80ZM280-320h400v-80H280v80Zm0-320v-120 120Zm0 320v-80 80Z" />
  </svg>
)
