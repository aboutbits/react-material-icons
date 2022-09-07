import React from 'react'
import { IconProps } from './types'

const IconVideocamSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4z" />
  </svg>
)

export { IconVideocamSharp as default }
