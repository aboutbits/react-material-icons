import React from 'react'
import { IconProps } from './types'

const IconModeCommentSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M22 2H2v16h16l4 4z" />
  </svg>
)

export { IconModeCommentSharp as default }
