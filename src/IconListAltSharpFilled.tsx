import React from 'react'
import { IconProps } from './types'

export const IconListAltSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM120-120v-720h720v720H120Z" />
  </svg>
)
