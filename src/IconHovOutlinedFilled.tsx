import React from 'react'
import { IconProps } from './types'

const IconHovOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80 240-480l240-400 240 400L480-80Z" />
  </svg>
)

export { IconHovOutlinedFilled as default }
