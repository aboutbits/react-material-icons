import React from 'react'
import { IconProps } from './types.js'

export const IconPackageSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280h200v-80H280v80ZM120-120v-720h720v720H120Zm200-640v320l160-80 160 80v-320H320Z" />
  </svg>
)
