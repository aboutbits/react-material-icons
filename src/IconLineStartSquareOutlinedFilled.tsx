import React from 'react'
import { IconProps } from './types'

export const IconLineStartSquareOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-260H80v-440h440v180h360v80H520v180Z" />
  </svg>
)
