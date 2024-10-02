import React from 'react'
import { IconProps } from './types'

export const IconDataTableSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-640h720v-160H120v160Zm0 240h720v-160H120v160Zm0 240h720v-160H120v160Zm40-520v-80h80v80h-80Zm0 240v-80h80v80h-80Zm0 240v-80h80v80h-80Z" />
  </svg>
)
