import React from 'react'
import { IconProps } from './types.js'

export const IconDeleteSweepSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-240v-80h160v80H600Zm0-320v-80h280v80H600Zm0 160v-80h240v80H600ZM120-640H80v-80h160v-60h160v60h160v80h-40v440H120v-440Zm80 0v360h240v-360H200Zm0 0v360-360Z" />
  </svg>
)
