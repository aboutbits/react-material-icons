import React from 'react'
import { IconProps } from './types.js'

export const IconNearMeOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M516-120 402-402 120-516v-56l720-268-268 720h-56Z" />
  </svg>
)