import React from 'react'
import { IconProps } from './types'

export const IconSwipeLeftAltSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-280q-73 0-127.5-45.5T404-440H233l63 64-56 56L80-480l160-160 57 56-64 64h171q14-69 68.5-114.5T600-680q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120Z" />
  </svg>
)
