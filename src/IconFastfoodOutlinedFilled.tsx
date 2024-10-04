import React from 'react'
import { IconProps } from './types'

const IconFastfoodOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-360q0-109 91-174.5T340-600q118 0 209 65.5T640-360H40Zm0 160v-80h600v80H40ZM80-40q-17 0-28.5-11.5T40-80v-40h600v40q0 17-11.5 28.5T600-40H80Zm640 0v-320q0-114-78-197T451-668l-11-92h200v-160h80v160h200l-65 648q-3 31-25.5 51.5T776-40h-56Z" />
  </svg>
)

export { IconFastfoodOutlinedFilled as default }
