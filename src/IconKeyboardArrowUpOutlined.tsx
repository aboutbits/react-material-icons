import React from 'react'
import { IconProps } from './types'

export const IconKeyboardArrowUpOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
  </svg>
)
