import React from 'react'
import { IconProps } from './types'

const IconLineStartArrowOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-200 80-480l440-280v240h360v80H520v240Zm-80-146v-268L229-480l211 134Zm0-134Z" />
  </svg>
)

export { IconLineStartArrowOutlined as default }
