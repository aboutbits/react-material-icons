import React from 'react'
import { IconProps } from './types.js'

export const IconTransitionSlideSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-160v-640h240v640H40Zm320 0v-640h560v640H360Z" />
  </svg>
)
