import React from 'react'
import { IconProps } from './types'

export const IconMopSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-520h80v-280q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800v280ZM200-360h560v-80H200v80Zm-58 240h98v-120h80v120h120v-120h80v120h120v-120h80v120h98l-40-160H182l-40 160ZM40-40l80-320v-160h240v-280q0-50 35-85t85-35q50 0 85 35t35 85v280h240v160l80 320H40Zm720-400H200h560Zm-240-80h-80 80Z" />
  </svg>
)
