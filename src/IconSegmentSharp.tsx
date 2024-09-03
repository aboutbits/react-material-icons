import React from 'react'
import { IconProps } from './types'

const IconSegmentSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-240v-80h480v80H360Zm0-200v-80h480v80H360ZM120-640v-80h720v80H120Z" />
  </svg>
)

export { IconSegmentSharp as default }
