import React from 'react'
import { IconProps } from './types.js'

export const IconForkLeftSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-120v-160q-18-64-63.5-94.5T357-405q-11 0-22 1.5t-22 3.5l63 64-56 56-160-160 160-160 56 56-63 64q9-2 19-3t21-1q44 0 88 13.5t79 44.5v-261l-64 64-56-57 160-160 160 160-56 56-64-63v567h-80Z" />
  </svg>
)