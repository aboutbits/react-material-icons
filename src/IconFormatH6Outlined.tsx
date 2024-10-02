import React from 'react'
import { IconProps } from './types'

export const IconFormatH6Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280v-400h80v160h160v-160h80v400h-80v-160H200v160h-80Zm480 0q-33 0-56.5-23.5T520-360v-240q0-33 23.5-56.5T600-680h240v80H600v80h160q33 0 56.5 23.5T840-440v80q0 33-23.5 56.5T760-280H600Zm0-160v80h160v-80H600Z" />
  </svg>
)
