import React from 'react'
import { IconProps } from './types.js'

export const IconTopicSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h320l80 80h400v560H80Zm80-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Zm80-80h320v-80H240v80Zm0-160h480v-80H240v80Z" />
  </svg>
)
