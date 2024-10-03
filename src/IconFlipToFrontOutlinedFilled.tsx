import React from 'react'
import { IconProps } from './types.js'

export const IconFlipToFrontOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280q-33 0-56.5-23.5T280-360v-400q0-33 23.5-56.5T360-840h400q33 0 56.5 23.5T840-760v400q0 33-23.5 56.5T760-280H360Zm0-80h400v-400H360v400ZM200-200v80q-33 0-56.5-23.5T120-200h80Zm-80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 480v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z" />
  </svg>
)
