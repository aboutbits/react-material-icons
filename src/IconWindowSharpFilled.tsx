import React from 'react'
import { IconProps } from './types.js'

export const IconWindowSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-440h320v320H520v-320Zm0-80v-320h320v320H520Zm-80 0H120v-320h320v320Zm0 80v320H120v-320h320Z" />
  </svg>
)
