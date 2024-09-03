import React from 'react'
import { IconProps } from './types'

const IconHardwareSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-520v-120H160q0-83 58.5-141.5T360-840h240v120l120-120h80v320h-80L600-640v120H360Zm0 400v-320h240v320H360Z" />
  </svg>
)

export { IconHardwareSharpFilled as default }
