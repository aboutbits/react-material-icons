import React from 'react'
import { IconProps } from './types'

export const IconViewComfySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-520v-280h800v280H80Zm320 360v-280h480v280H400Zm-320 0v-280h240v280H80Z" />
  </svg>
)
