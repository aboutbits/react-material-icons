import React from 'react'
import { IconProps } from './types'

const IconWbAutoOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M193-360h48l26-72h112l26 72h48L349-640h-52L193-360Zm88-112 40-116h4l40 116h-84Zm42 272q-117 0-198.5-81.5T43-480q0-117 81.5-198.5T323-760q75 0 138.5 37T563-622l-4-18h48l48 204h2l58-204h44l58 204h4l48-204h48l-74 280h-46l-60-210h-2l-58 210h-46l-28-116q0 115-82 195.5T323-200Z" />
  </svg>
)

export { IconWbAutoOutlinedFilled as default }
