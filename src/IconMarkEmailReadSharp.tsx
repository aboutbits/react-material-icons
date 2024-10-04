import React from 'react'
import { IconProps } from './types.js'

export const IconMarkEmailReadSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M638-80 468-250l56-56 114 114 226-226 56 56L638-80ZM480-520l320-200H160l320 200Zm0 80L160-640v400h206l80 80H80v-640h800v254l-80 80v-174L480-440Zm0 0Zm0-80Zm0 80Z" />
  </svg>
)
