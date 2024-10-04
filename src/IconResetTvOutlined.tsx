import React from 'react'
import { IconProps } from './types.js'

export const IconResetTvOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v120h-80v-120H160v480h640v-200H512l74 74-56 56-170-170 170-170 56 56-74 74h288q33 0 56.5 23.5T880-480v200q0 33-23.5 56.5T800-200H640v80H320Zm200-400Z" />
  </svg>
)
