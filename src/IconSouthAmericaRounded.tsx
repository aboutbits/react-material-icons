import React from 'react'
import { IconProps } from './types.js'

export const IconSouthAmericaRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80-28-28q-6-6-9-13t-3-15v-224q-33 0-56.5-23.5T360-520v-40L235-685q-35 42-55 94t-20 111q0 134 93 227t227 93Zm40-2q119-15 199.5-105T800-480q0-133-93.5-226.5T480-800q-44 0-84.5 11.5T320-757v77h142q18 0 34.5 8t27.5 22l56 70h60q17 0 28.5 11.5T680-540v42q0 9-2.5 17t-7.5 16L520-240v78Z" />
  </svg>
)
