import React from 'react'
import { IconProps } from './types'

const IconKeyboardArrowDownSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
  </svg>
)

export { IconKeyboardArrowDownSharp as default }
