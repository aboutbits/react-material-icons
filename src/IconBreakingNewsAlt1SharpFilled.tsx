import React from 'react'
import { IconProps } from './types'

const IconBreakingNewsAlt1SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280h200v-80H240v80Zm400 0h80v-80h-80v80ZM240-440h200v-80H240v80Zm400 0h80v-240h-80v240ZM240-600h200v-80H240v80ZM80-120v-720h800v720H80Z" />
  </svg>
)

export { IconBreakingNewsAlt1SharpFilled as default }
