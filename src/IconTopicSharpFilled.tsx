import React from 'react'
import { IconProps } from './types'

export const IconTopicSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h320l80 80h400v560H80Zm160-160h320v-80H240v80Zm0-160h480v-80H240v80Z" />
  </svg>
)
