import React from 'react'
import { IconProps } from './types.js'

export const IconApparelSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-522-75 41L46-689l264-151h90v40q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-40h90l264 151-118 206-76-38v401H240v-402Z" />
  </svg>
)
