import React from 'react'
import { IconProps } from './types'

export const IconBookmarkAddSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-600v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM200-120v-720h360q-20 30-30 57.5T520-720q0 72 45.5 127T680-524q23 3 40 3t40-3v404L480-240 200-120Z" />
  </svg>
)
