import React from 'react'
import { IconProps } from './types.js'

export const IconBookmarksSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-640h480v640L400-200 160-80Zm560-160v-560H280v-80h520v640h-80Z" />
  </svg>
)
