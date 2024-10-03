import React from 'react'
import { IconProps } from './types.js'

export const IconUnfoldLessDoubleSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m354-2-56-56 183-183L664-58 608-1 481-128 354-2Zm0-200-56-56 183-183 183 183-56 57-127-127-127 126Zm127-318L297-704l57-57 127 127 126-127 57 57-183 184Zm0-200L297-904l57-57 127 127 126-127 57 57-183 184Z" />
  </svg>
)
