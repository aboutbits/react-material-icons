import React from 'react'
import { IconProps } from './types'

const IconMoveGroupSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240v-160h80v80h480v-400H320v80h-80v-240h640v640H240ZM80-80v-640h80v560h560v80H80Zm440-280-56-56 63-64H240v-80h287l-63-64 56-56 160 160-160 160Z" />
  </svg>
)

export { IconMoveGroupSharp as default }
