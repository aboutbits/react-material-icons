import React from 'react'
import { IconProps } from './types'

export const IconArrowLeftSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-280 360-480l200-200v400Z" />
  </svg>
)
