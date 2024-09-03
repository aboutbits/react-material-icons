import React from 'react'
import { IconProps } from './types'

const IconIceSkatingOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-80h160v-80H120v-600h320v120H340q-8 0-14 6t-6 14q0 8 6 14t14 6h102v40H340q-8 0-14 6t-6 14q0 8 6 14t14 6h116q14 23 35.5 39t47.5 24l105 29q52 14 84 56.5t32 96.5v115H640v80h80q50 0 85-35t35-85h80q0 83-58.5 141.5T720-80H80Zm240-80h240v-80H320v80Z" />
  </svg>
)

export { IconIceSkatingOutlinedFilled as default }
