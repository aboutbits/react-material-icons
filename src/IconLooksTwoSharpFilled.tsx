import React from 'react'
import { IconProps } from './types.js'

export const IconLooksTwoSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280h240v-80H440v-80h160v-240H360v80h160v80H360v240ZM120-120v-720h720v720H120Z" />
  </svg>
)
