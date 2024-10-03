import React from 'react'
import { IconProps } from './types.js'

export const IconCarpenterSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M563-52 393-221l57-57-326-466 156-156 566 565L563-52Zm-56-283 113-112-340-340-52 52 279 400Zm56 170 169-169-56-57-170 170 57 56Zm-56-170 113-112-113 112Z" />
  </svg>
)
