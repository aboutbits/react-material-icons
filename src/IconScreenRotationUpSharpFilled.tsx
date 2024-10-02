import React from 'react'
import { IconProps } from './types'

export const IconScreenRotationUpSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m550-30-56-57 73-73H240v-487l80 80v327h247l-73-73 56-57 170 170L550-30Zm170-283-80-80v-327H393l73 73-56 57-170-170 170-170 56 57-73 73h327v487Z" />
  </svg>
)
