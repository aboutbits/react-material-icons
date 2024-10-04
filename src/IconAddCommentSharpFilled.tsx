import React from 'react'
import { IconProps } from './types.js'

export const IconAddCommentSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-400h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM80-80v-800h800v640H240L80-80Z" />
  </svg>
)