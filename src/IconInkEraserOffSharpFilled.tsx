import React from 'react'
import { IconProps } from './types'

const IconInkEraserOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-55 602-244l-82 84H190L48-302l244-252L55-791l57-57 736 736-57 57Zm-76-304L404-670l196-204 312 312-197 203Z" />
  </svg>
)

export { IconInkEraserOffSharpFilled as default }
