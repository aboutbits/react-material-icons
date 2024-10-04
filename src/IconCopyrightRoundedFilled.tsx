import React from 'react'
import { IconProps } from './types.js'

export const IconCopyrightRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-80-240h160q17 0 28.5-11.5T600-360v-40q0-17-11.5-28.5T560-440q-17 0-28.5 11.5T520-400h-80v-160h80q0 17 11.5 28.5T560-520q17 0 28.5-11.5T600-560v-40q0-17-11.5-28.5T560-640H400q-17 0-28.5 11.5T360-600v240q0 17 11.5 28.5T400-320Z" />
  </svg>
)