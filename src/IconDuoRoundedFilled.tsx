import React from 'react'
import { IconProps } from './types'

const IconDuoRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880h320q33 0 56.5 23.5T880-800v320q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM280-360h280v-80l120 80v-240l-120 80v-80H280v240Z" />
  </svg>
)

export { IconDuoRoundedFilled as default }
