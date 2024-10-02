import React from 'react'
import { IconProps } from './types'

export const IconUnfoldMoreDoubleSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M481-1 298-184l56-56 127 126 127-127 56 57L481-1Zm0-200L298-384l56-56 127 126 127-127 56 57-183 183ZM354-520l-57-57 184-184 183 184-57 57-126-127-127 127Zm0-200-57-57 184-184 183 184-57 57-126-127-127 127Z" />
  </svg>
)
