import React from 'react'
import { IconProps } from './types.js'

export const IconLineEndSquareSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-260v-180H80v-80h360v-180h440v440H440Z" />
  </svg>
)
