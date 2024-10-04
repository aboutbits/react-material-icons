import React from 'react'
import { IconProps } from './types.js'

export const IconMergeTypeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M664-160 440-384v-301L336-581l-57-57 201-201 200 200-57 57-103-103v269l200 200-56 56Zm-368 1-56-56 127-128 57 57-128 127Z" />
  </svg>
)