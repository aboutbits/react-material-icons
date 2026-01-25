import React from 'react'
import { IconProps } from './types.js'

export const IconPlayArrowSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-200v-560l440 280-440 280Z" />
  </svg>
)
