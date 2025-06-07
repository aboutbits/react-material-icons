import React from 'react'
import { IconProps } from './types.js'

export const IconStopOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240v-480h480v480H240Z" />
  </svg>
)
