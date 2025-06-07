import React from 'react'
import { IconProps } from './types.js'

export const IconResetTvSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-80H80v-640h800v200h-80v-120H160v480h640v-200H512l74 74-56 56-170-170 170-170 56 56-74 74h368v360H640v80H320Zm200-400Z" />
  </svg>
)
