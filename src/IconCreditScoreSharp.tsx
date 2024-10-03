import React from 'react'
import { IconProps } from './types.js'

export const IconCreditScoreSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-640h640v-80H160v80ZM80-160v-640h800v320H160v240h164v80H80Zm518 80L428-250l56-56 114 112 226-226 56 58L598-80ZM160-240v-180 113-413 480Z" />
  </svg>
)
