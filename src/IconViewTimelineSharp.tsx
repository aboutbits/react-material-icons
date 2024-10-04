import React from 'react'
import { IconProps } from './types'

const IconViewTimelineSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280h240v-80H240v80Zm240-320h240v-80H480v80ZM360-440h240v-80H360v80ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z" />
  </svg>
)

export { IconViewTimelineSharp as default }
