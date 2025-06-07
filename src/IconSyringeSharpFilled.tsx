import React from 'react'
import { IconProps } from './types.js'

export const IconSyringeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m268-682-43-43-40 40-56-57 136-136 58 57-42 40 43 43 141-141 57 57-56 55 62 62-140 140 56 57 140-141 61 60-141 141 55 56 141-141 117 117-84 86 189 188H808L676-274l-84 86-352-352-55 54-56-56 139-140Z" />
  </svg>
)
