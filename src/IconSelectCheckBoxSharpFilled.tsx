import React from 'react'
import { IconProps } from './types'

export const IconSelectCheckBoxSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h675l-80 80H200v560h560v-266l80-80v426H120Zm341-160L235-506l56-56 170 170 367-367 57 55-424 424Z" />
  </svg>
)
