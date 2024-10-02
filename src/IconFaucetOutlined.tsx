import React from 'react'
import { IconProps } from './types'

export const IconFaucetOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-360v-80h200v-40h-80q-17 0-28.5-11.5T160-520q0-17 11.5-28.5T200-560h80q33 0 56.5 23.5T360-480v40h80v-276q0-69 48-116.5T605-880q46 0 85 24t60 66l46 92-72 36-46-92q-11-21-31-33.5T604-800q-35 0-59.5 24.5T520-716v276h80v-40q0-33 23.5-56.5T680-560h80q17 0 28.5 11.5T800-520q0 17-11.5 28.5T760-480h-80v40h200v80H80Zm160 240q-33 0-56.5-23.5T160-200v-160h80v160h480v-160h80v160q0 33-23.5 56.5T720-120H240Z" />
  </svg>
)
