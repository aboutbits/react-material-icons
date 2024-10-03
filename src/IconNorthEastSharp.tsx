import React from 'react'
import { IconProps } from './types.js'

export const IconNorthEastSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
  </svg>
)
