import React from 'react'
import { IconProps } from './types'

const IconReplaceVideoSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M140-640q38-109 131.5-174.5T480-880q82 0 155.5 35T760-746v-134h80v240H600v-80h76q-39-39-90-59.5T480-800q-81 0-149.5 43T227-640h-87Zm60 560v-480h480v200l120-120v320L680-280v200H200Z" />
  </svg>
)

export { IconReplaceVideoSharpFilled as default }
