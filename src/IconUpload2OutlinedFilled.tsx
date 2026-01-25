import React from 'react'
import { IconProps } from './types.js'

export const IconUpload2OutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-80h640v80H160Zm200-160v-280H200l280-360 280 360H600v280H360Z" />
  </svg>
)
