import React from 'react'
import { IconProps } from './types'

export const IconSettopComponentSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-280v-400h800v400H80Zm120-160h240v-80H200v80Zm320 0h80v-80h-80v80Zm120 0h80v-80h-80v80Z" />
  </svg>
)
