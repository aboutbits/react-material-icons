import React from 'react'
import { IconProps } from './types'

export const IconModeCommentSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-640h800v800L720-240H80Z" />
  </svg>
)
