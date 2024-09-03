import React from 'react'
import { IconProps } from './types'

const IconScreenshotFrameSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-680v-200h200v80H280v120h-80Zm0 600v-200h80v120h120v80H200Zm480-600v-120H560v-80h200v200h-80ZM560-80v-80h120v-120h80v200H560Z" />
  </svg>
)

export { IconScreenshotFrameSharp as default }