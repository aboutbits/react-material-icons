import React from 'react'
import { IconProps } from './types.js'

export const IconCrop169Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280v-400h720v400H120Zm80-80h560v-240H200v240Zm0 0v-240 240Z" />
  </svg>
)
