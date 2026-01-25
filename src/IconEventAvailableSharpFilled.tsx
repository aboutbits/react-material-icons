import React from 'react'
import { IconProps } from './types.js'

export const IconEventAvailableSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M438-226 296-368l58-58 84 84 168-168 58 58-226 226ZM120-80v-720h120v-80h80v80h320v-80h80v80h120v720H120Zm80-80h560v-400H200v400Z" />
  </svg>
)
