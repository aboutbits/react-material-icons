import React from 'react'
import { IconProps } from './types.js'

export const IconInboxSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm360-200q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22Z" />
  </svg>
)
