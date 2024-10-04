import React from 'react'
import { IconProps } from './types.js'

export const IconCounter8SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM360-280h240v-160l-40-40 40-40v-160H360v160l40 40-40 40v160Zm80-240v-80h80v80h-80Zm0 160v-80h80v80h-80Z" />
  </svg>
)