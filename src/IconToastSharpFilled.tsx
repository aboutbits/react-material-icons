import React from 'react'
import { IconProps } from './types'

export const IconToastSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240h480v-80H240v80ZM120-120v-720h720v720H120Z" />
  </svg>
)
