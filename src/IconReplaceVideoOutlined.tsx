import React from 'react'
import { IconProps } from './types'

const IconReplaceVideoOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-160h320v-320H280v320ZM140-640q38-109 131.5-174.5T480-880q82 0 155.5 35T760-746v-134h80v240H600v-80h76q-39-39-90-59.5T480-800q-81 0-149.5 43T227-640h-87Zm140 480v-320 320Zm0 80q-33 0-56.5-23.5T200-160v-320q0-33 23.5-56.5T280-560h320q33 0 56.5 23.5T680-480v120l120-120v320L680-280v120q0 33-23.5 56.5T600-80H280Z" />
  </svg>
)

export { IconReplaceVideoOutlined as default }
