import React from 'react'
import { IconProps } from './types.js'

export const Icon1xMobiledataBadgeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280h80v-400H200v80h80v320Zm180 0h80l70-127 70 127h80L650-480l110-200h-80l-70 127-70-127h-80l110 200-110 200ZM40-120v-720h880v720H40Z" />
  </svg>
)
