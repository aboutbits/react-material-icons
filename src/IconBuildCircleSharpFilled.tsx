import React from 'react'
import { IconProps } from './types.js'

export const IconBuildCircleSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M408-412q13 0 24.5-2t22.5-6l151 150 84-84-150-151q4-11 6-22t2-25q0-57-40.5-97.5T410-690q-17 0-34 4.5T343-673l94 94-56 56-94-94q-8 16-12.5 33t-4.5 34q0 57 40.5 97.5T408-412Zm72 332q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)
