import React from 'react'
import { IconProps } from './types'

const IconCardMembershipSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-360h640v-80H160v80ZM320-80v-200H80v-600h800v600H640v200l-160-80-160 80ZM160-560h640v-240H160v240Zm0 200v-440 440Z" />
  </svg>
)

export { IconCardMembershipSharp as default }
