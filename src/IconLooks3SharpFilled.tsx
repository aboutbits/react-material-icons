import React from 'react'
import { IconProps } from './types'

export const IconLooks3SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280h240v-400H360v80h160v80h-80v80h80v80H360v80ZM120-120v-720h720v720H120Z" />
  </svg>
)
