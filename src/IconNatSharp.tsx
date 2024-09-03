import React from 'react'
import { IconProps } from './types'

const IconNatSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-360q-50 0-85-35t-35-85q0-50 35-85t85-35q39 0 69.5 22.5T272-520h168v80H272q-12 35-42.5 57.5T160-360Zm0-80q17 0 28.5-11.5T200-480q0-17-11.5-28.5T160-520q-17 0-28.5 11.5T120-480q0 17 11.5 28.5T160-440Zm40 360v-80q133 0 226.5-93.5T520-480q0-133-93.5-226.5T200-800v-80q157 0 270 104t128 256h168l-62-64 56-56 160 160-160 160-56-56 62-64H598q-15 152-128 256T200-80Z" />
  </svg>
)

export { IconNatSharp as default }
