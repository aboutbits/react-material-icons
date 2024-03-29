import React from 'react'
import { IconProps } from './types'

const IconEjectSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 17h14v2H5v-2zm7-12L5.33 15h13.34L12 5z" />
  </svg>
)

export { IconEjectSharp as default }
