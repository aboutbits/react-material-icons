import React from 'react'
import { IconProps } from './types.js'

export const IconTvOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M853-221 234-840h566q33 0 56.5 23.5T880-760v480q0 18-6.5 32.5T853-221ZM127-833v112l-99-99 56-56L876-84l-56 56-172-172h-8v80H320v-80H160q-33 0-56.5-23.5T80-280v-480q0-37 23.5-55l23.5-18Z" />
  </svg>
)
