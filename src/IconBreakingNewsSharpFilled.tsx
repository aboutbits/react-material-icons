import React from 'react'
import { IconProps } from './types'

const IconBreakingNewsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280h80v-80h-80v80Zm0-160h80v-240h-80v240Zm200 160h280v-80H440v80Zm0-160h280v-80H440v80Zm0-160h280v-80H440v80ZM80-120v-720h800v720H80Z" />
  </svg>
)

export { IconBreakingNewsSharpFilled as default }
