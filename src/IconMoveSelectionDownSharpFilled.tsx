import React from 'react'
import { IconProps } from './types.js'

export const IconMoveSelectionDownSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80v-480h480v480H240Zm0-560v-80h80v80h-80Zm400 0v-80h80v80h-80ZM240-800v-80h80v80h-80Zm200 0v-80h80v80h-80Zm200 0v-80h80v80h-80Z" />
  </svg>
)
