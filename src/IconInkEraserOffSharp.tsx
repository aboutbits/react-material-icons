import React from 'react'
import { IconProps } from './types'

const IconInkEraserOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-55 602-244l-82 84H190L48-302l244-252L55-791l57-57 736 736-57 57ZM224-240h262l59-61-197-197-188 194 64 64Zm491-119-57-57 142-146-198-198-142 146-56-56 196-204 312 312-197 203ZM559-515ZM447-400Z" />
  </svg>
)

export { IconInkEraserOffSharp as default }
