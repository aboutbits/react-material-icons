import React from 'react'
import { IconProps } from './types.js'

export const IconArrowBack2OutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-200 200-480l440-280v560Z" />
  </svg>
)