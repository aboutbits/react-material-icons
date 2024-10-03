import React from 'react'
import { IconProps } from './types.js'

export const IconFlakySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM294-511l56-57 56 57 43-43-57-56 57-56-43-43-56 57-56-57-43 43 57 56-57 56 43 43Zm186 351q133 0 226.5-93.5T800-480q0-66-25-124t-69-102L254-254q44 44 102 69t124 25Zm82-96-96-96 42-43 54 54 100-99 42 42-142 142Z" />
  </svg>
)
