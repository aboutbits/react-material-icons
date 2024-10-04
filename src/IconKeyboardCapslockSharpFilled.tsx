import React from 'react'
import { IconProps } from './types.js'

export const IconKeyboardCapslockSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240v-80h480v80H240Zm240-496 240 240-56 56-184-184-184 184-56-56 240-240Z" />
  </svg>
)
