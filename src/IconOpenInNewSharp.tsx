import React from 'react'
import { IconProps } from './types'

const IconOpenInNewSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h360v80H200v560h560v-280h80v360H120Zm268-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
  </svg>
)

export { IconOpenInNewSharp as default }
