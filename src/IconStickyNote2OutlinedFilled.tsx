import React from 'react'
import { IconProps } from './types'

const IconStickyNote2OutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v400L600-120H200Zm360-80 200-200H560v200ZM280-400h200v-80H280v80Zm0-160h400v-80H280v80Z" />
  </svg>
)

export { IconStickyNote2OutlinedFilled as default }
