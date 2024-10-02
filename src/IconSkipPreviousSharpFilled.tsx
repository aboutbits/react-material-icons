import React from 'react'
import { IconProps } from './types'

export const IconSkipPreviousSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Z" />
  </svg>
)
