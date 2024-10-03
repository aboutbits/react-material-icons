import React from 'react'
import { IconProps } from './types.js'

export const IconTvDisplaysSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-320v-560h640v80H160v480H80ZM440-80v-80H240v-560h680v560H720v80H440Z" />
  </svg>
)
