import React from 'react'
import { IconProps } from './types.js'

export const IconFastRewindOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M860-240 500-480l360-240v480Zm-400 0L100-480l360-240v480Z" />
  </svg>
)
