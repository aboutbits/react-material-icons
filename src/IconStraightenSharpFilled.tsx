import React from 'react'
import { IconProps } from './types.js'

export const IconStraightenSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-480h200v240h80v-240h80v240h80v-240h80v240h80v-240h200v480H80Z" />
  </svg>
)
