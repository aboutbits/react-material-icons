import React from 'react'
import { IconProps } from './types.js'

export const IconCardMembershipSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-880h800v600H640v200l-160-80-160 80v-200H80v-600Zm80 440h640v-120H160v120Z" />
  </svg>
)
