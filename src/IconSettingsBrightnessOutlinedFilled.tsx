import React from 'react'
import { IconProps } from './types.js'

export const IconSettingsBrightnessOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-260 60-60h100v-100l60-60-60-60v-100H540l-60-60-60 60H320v100l-60 60 60 60v100h100l60 60Zm0-100v-240q50 0 85 35t35 85q0 50-35 85t-85 35ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)