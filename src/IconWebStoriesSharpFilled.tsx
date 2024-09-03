import React from 'react'
import { IconProps } from './types'

const IconWebStoriesSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-160v-640h80v640h-80ZM80-80v-800h520v800H80Zm760-160v-480h60v480h-60Z" />
  </svg>
)

export { IconWebStoriesSharpFilled as default }
