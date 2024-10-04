import React from 'react'
import { IconProps } from './types'

const IconClosedCaptionAddSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-480Zm120 320H120v-640h720v400h-80v-320H200v480h400v80Zm160 80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM240-360h200v-80h-60v20h-80v-120h80v20h60v-80H240v240Zm280 0h200v-80h-60v20h-80v-120h80v20h60v-80H520v240Z" />
  </svg>
)

export { IconClosedCaptionAddSharp as default }
