import React from 'react'
import { IconProps } from './types'

const IconDesktopLandscapeAddSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240v-480 480Zm80-80v-200h360v200H240ZM80-160v-640h800v320h-80v-240H160v480h360v80H80Zm580-320v-100H360v-60h360v160h-60Zm60 400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
  </svg>
)

export { IconDesktopLandscapeAddSharp as default }
