import React from 'react'
import { IconProps } from './types'

const IconPhotoSizeSelectSmallSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-400h400v400H120Zm480 0v-80h80v80h-80Zm-440-80h320L376-340l-76 100-56-74-84 114Zm600-80v-80h80v80h-80Zm0-160v-80h80v80h-80ZM120-600v-80h80v80h-80Zm640 0v-80h80v80h-80ZM280-760v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm-480 0v-80h80v80h-80Zm720 0h-80v-80h80v80Zm-80 640v-80h80v80h-80Z" />
  </svg>
)

export { IconPhotoSizeSelectSmallSharp as default }
