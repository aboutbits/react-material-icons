import React from 'react'
import { IconProps } from './types.js'

export const IconTvOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M853-221 234-840h646v619h-27ZM127-833v112l-99-99 56-56L876-84l-56 56-172-172h-8v80H320v-80H80v-633h47Z" />
  </svg>
)
