import React from 'react'
import { IconProps } from './types.js'

export const IconHighlighterSize4Outlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M353-127 127-353q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t27.5 12l227 226q12 12 12 28.5T833-550L410-127q-12 12-28.5 12T353-127Z" />
  </svg>
)
