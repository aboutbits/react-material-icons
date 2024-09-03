import React from 'react'
import { IconProps } from './types'

const IconRangeHoodOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-168q0-16 6.5-30.5T104-464l176-176v-200h400v200l177 177q11 11 17 25.5t6 30.5v167q0 33-23.5 56.5T800-160H160Zm72-320h496L600-608v-152H360v152L232-480Zm-72 240h640v-160H160v160Zm240-52v-60h160v60H400Z" />
  </svg>
)

export { IconRangeHoodOutlined as default }