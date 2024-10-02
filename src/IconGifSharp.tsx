import React from 'react'
import { IconProps } from './types'

export const IconGifSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M460-360v-240h60v240h-60Zm-260 0v-240h200v60H260v120h80v-60h60v120H200Zm380 0v-240h180v60H640v40h80v60h-80v80h-60Z" />
  </svg>
)
