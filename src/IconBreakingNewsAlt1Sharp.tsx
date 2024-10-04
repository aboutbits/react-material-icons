import React from 'react'
import { IconProps } from './types'

const IconBreakingNewsAlt1Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280h200v-80H240v80Zm400 0h80v-80h-80v80ZM240-440h200v-80H240v80Zm400 0h80v-240h-80v240ZM240-600h200v-80H240v80ZM80-120v-720h800v720H80Zm80-80h640v-560H160v560Zm0 0v-560 560Z" />
  </svg>
)

export { IconBreakingNewsAlt1Sharp as default }
