import React from 'react'
import { IconProps } from './types.js'

export const IconScanSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-200h80v120h480v-120h80v200H160Zm0-440v-360h400l240 240v120h-80v-80H520v-200H240v280h-80ZM40-360v-80h880v80H40Zm440-160Zm0 240Z" />
  </svg>
)
