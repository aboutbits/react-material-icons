import React from 'react'
import { IconProps } from './types'

export const IconArrowMenuCloseOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-280v-400L240-480l200 200Zm80 160h80v-720h-80v720Z" />
  </svg>
)
