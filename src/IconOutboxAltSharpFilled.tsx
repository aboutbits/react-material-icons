import React from 'react'
import { IconProps } from './types.js'

export const IconOutboxAltSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-240 480-240-480-240v174l200 66-200 66v174Zm480-240ZM120-120v-720h720v720H120Z" />
  </svg>
)
