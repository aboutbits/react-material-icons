import React from 'react'
import { IconProps } from './types'

export const IconTvDisplaysOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-320v-480q0-33 23.5-56.5T160-880h560v80H160v480H80ZM440-80v-80H320q-33 0-56.5-23.5T240-240v-400q0-33 23.5-56.5T320-720h520q33 0 56.5 23.5T920-640v400q0 33-23.5 56.5T840-160H720v80H440Z" />
  </svg>
)
