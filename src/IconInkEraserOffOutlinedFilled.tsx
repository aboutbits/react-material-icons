import React from 'react'
import { IconProps } from './types'

const IconInkEraserOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-55 602-244l-82 84H190l-85-85q-23-23-23.5-57t22.5-58l188-194L55-791l57-57 736 736-57 57Zm-76-304L404-670l140-146q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L715-359Z" />
  </svg>
)

export { IconInkEraserOffOutlinedFilled as default }
