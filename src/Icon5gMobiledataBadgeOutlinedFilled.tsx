import React from 'react'
import { IconProps } from './types'

const Icon5gMobiledataBadgeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm640-400H640v80h40v80H560v-240h200q0-33-23.5-56.5T680-680H560q-33 0-56.5 23.5T480-600v240q0 33 23.5 56.5T560-280h120q33 0 56.5-23.5T760-360v-160ZM200-280h160q33 0 56.5-23.5T440-360v-80q0-33-23.5-56.5T360-520h-80v-80h160v-80H200v240h160v80H200v80Z" />
  </svg>
)

export { Icon5gMobiledataBadgeOutlinedFilled as default }
