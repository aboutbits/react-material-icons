import React from 'react'
import { IconProps } from './types'

const IconBreakingNewsAlt1OutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm80-160h200v-80H240v80Zm0-160h200v-80H240v80Zm0-160h200v-80H240v80Zm400 320h80v-80h-80v80Zm0-160h80v-240h-80v240Z" />
  </svg>
)

export { IconBreakingNewsAlt1OutlinedFilled as default }
