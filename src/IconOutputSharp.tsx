import React from 'react'
import { IconProps } from './types.js'

export const IconOutputSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v160h-80v-80H200v560h560v-80h80v160H120Zm560-160-56-56 103-104H360v-80h367L624-624l56-56 200 200-200 200Z" />
  </svg>
)
