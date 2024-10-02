import React from 'react'
import { IconProps } from './types'

export const IconLineEndArrowSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-200v-240H80v-80h360v-240l440 280-440 280Z" />
  </svg>
)
