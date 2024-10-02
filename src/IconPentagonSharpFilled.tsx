import React from 'react'
import { IconProps } from './types'

export const IconPentagonSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120 80-600l400-280 400 280-160 480H240Z" />
  </svg>
)
