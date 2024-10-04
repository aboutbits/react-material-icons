import React from 'react'
import { IconProps } from './types'

const IconHardwareOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-520v-120H160q0-83 58.5-141.5T360-840h240v120l120-120h80v320h-80L600-640v120H360Zm40 400q-17 0-28.5-11.5T360-160v-280h240v280q0 17-11.5 28.5T560-120H400Z" />
  </svg>
)

export { IconHardwareOutlinedFilled as default }
