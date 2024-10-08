import React from 'react'
import { IconProps } from './types'

const IconBookmarksSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-640h480v640L400-200 160-80Zm80-121 160-86 160 86v-439H240v439Zm480-39v-560H280v-80h520v640h-80ZM240-640h320-320Z" />
  </svg>
)

export { IconBookmarksSharp as default }
