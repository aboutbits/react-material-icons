import React from 'react'
import { IconProps } from './types'

const IconUnknown5SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-480v-80h320v80H160ZM480-80q-80 0-153.5-29.5T196-196l56-56q47 44 106 68t122 24q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800v-80q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" />
  </svg>
)

export { IconUnknown5SharpFilled as default }
