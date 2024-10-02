import React from 'react'
import { IconProps } from './types'

export const IconClosedCaptionSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160v-640h720v640H120Zm80-80h560v-480H200v480Zm40-120h200v-80h-60v20h-80v-120h80v20h60v-80H240v240Zm280 0h200v-80h-60v20h-80v-120h80v20h60v-80H520v240ZM200-240v-480 480Z" />
  </svg>
)
