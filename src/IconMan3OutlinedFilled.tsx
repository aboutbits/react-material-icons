import React from 'react'
import { IconProps } from './types.js'

export const IconMan3OutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-70v-280h-80v-240q0-33 23.5-56.5T400-670h160q33 0 56.5 23.5T640-590v240h-80v280H400Zm80-630-90-90 90-90 90 90-90 90Z" />
  </svg>
)