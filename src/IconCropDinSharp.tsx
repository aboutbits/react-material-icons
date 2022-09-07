import React from 'react'
import { IconProps } from './types'

const IconCropDinSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M21 3H3v18h18V3zm-2 16H5V5h14v14z" />
  </svg>
)

export { IconCropDinSharp as default }
