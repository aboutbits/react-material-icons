import React from 'react'
import { IconProps } from './types.js'

export const IconDialogsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-320h320v-320H320v320ZM120-120v-720h720v720H120Z" />
  </svg>
)
