import React from 'react'
import { IconProps } from './types'

const IconCheckBoxOutlineBlankSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 5v14H5V5h14m2-2H3v18h18V3z" />
  </svg>
)

export { IconCheckBoxOutlineBlankSharp as default }
