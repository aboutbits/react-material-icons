import React from 'react'
import { IconProps } from './types.js'

export const IconCodeOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-55 280-566l-87 87 183 183-56 56L80-480l143-143L55-791l57-57 736 736-57 57Zm-54-282-57-57 87-87-183-183 56-56 240 240-143 143Z" />
  </svg>
)
