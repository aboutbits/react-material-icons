import React from 'react'
import { IconProps } from './types.js'

export const IconWysiwygRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm120-280q-17 0-28.5-11.5T280-520q0-17 11.5-28.5T320-560h320q17 0 28.5 11.5T680-520q0 17-11.5 28.5T640-480H320Zm0 160q-17 0-28.5-11.5T280-360q0-17 11.5-28.5T320-400h160q17 0 28.5 11.5T520-360q0 17-11.5 28.5T480-320H320Z" />
  </svg>
)