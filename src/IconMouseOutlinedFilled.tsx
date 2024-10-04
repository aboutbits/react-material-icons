import React from 'react'
import { IconProps } from './types'

const IconMouseOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-117 0-198.5-81.5T200-360v-160h560v160q0 117-81.5 198.5T480-80ZM200-600q0-105 68-183.5T440-877v277H200Zm320 0v-277q104 15 172 93.5T760-600H520Z" />
  </svg>
)

export { IconMouseOutlinedFilled as default }
