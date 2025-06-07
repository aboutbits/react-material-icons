import React from 'react'
import { IconProps } from './types.js'

export const Icon3gMobiledataBadgeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm640-400H640v80h40v80H560v-240h200q0-33-23.5-56.5T680-680H560q-33 0-56.5 23.5T480-600v240q0 33 23.5 56.5T560-280h120q33 0 56.5-23.5T760-360v-160ZM200-280h160q33 0 56.5-23.5T440-360v-60q0-25-17.5-42.5T380-480q25 0 42.5-17.5T440-540v-60q0-33-23.5-56.5T360-680H200v80h160v80H200v80h160v80H200v80Z" />
  </svg>
)
