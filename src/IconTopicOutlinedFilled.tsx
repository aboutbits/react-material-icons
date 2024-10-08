import React from 'react'
import { IconProps } from './types'

const IconTopicOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm80-160h320v-80H240v80Zm0-160h480v-80H240v80Z" />
  </svg>
)

export { IconTopicOutlinedFilled as default }
