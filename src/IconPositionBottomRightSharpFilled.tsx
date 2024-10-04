import React from 'react'
import { IconProps } from './types.js'

export const IconPositionBottomRightSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280h360v-120H360v120ZM120-120v-720h720v720H120Z" />
  </svg>
)