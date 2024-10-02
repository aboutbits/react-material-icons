import React from 'react'
import { IconProps } from './types'

export const IconCarpenterSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M563-52 393-221l57-57-326-466 156-156 566 565L563-52Zm0-113 169-169-56-57-170 170 57 56Z" />
  </svg>
)
