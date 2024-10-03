import React from 'react'
import { IconProps } from './types.js'

export const IconNoteStackSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80v-601h600v401L680-80H280Zm520-240H640v160l160-160ZM172-197 67-788l591-105 24 133H200v558l-28 5Z" />
  </svg>
)
