import React from 'react'
import { IconProps } from './types.js'

export const IconFortSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-160l80-80v-240l-80-80v-160h80v80h80v-80h80v80h80v-80h80v160l-80 80v40h240v-40l-80-80v-160h80v80h80v-80h80v80h80v-80h80v160l-80 80v240l80 80v160H560v-200H400v200H40Z" />
  </svg>
)
