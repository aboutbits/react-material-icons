import React from 'react'
import { IconProps } from './types.js'

export const IconOpenInBrowserSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H600v-80h160v-480H200v480h160v80H120Zm320 0v-246l-64 64-56-58 160-160 160 160-56 58-64-64v246h-80Z" />
  </svg>
)
