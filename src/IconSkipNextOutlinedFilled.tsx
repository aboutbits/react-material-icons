import React from 'react'
import { IconProps } from './types.js'

export const IconSkipNextOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z" />
  </svg>
)
