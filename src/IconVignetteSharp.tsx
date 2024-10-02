import React from 'react'
import { IconProps } from './types'

export const IconVignetteSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-320q98 0 169-47.5T720-480q0-65-71-112.5T480-640q-98 0-169 47.5T240-480q0 65 71 112.5T480-320Zm0-80q-65 0-112.5-24T320-480q0-32 47.5-56T480-560q65 0 112.5 24t47.5 56q0 32-47.5 56T480-400ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)
