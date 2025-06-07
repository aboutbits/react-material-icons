import React from 'react'
import { IconProps } from './types.js'

export const IconCardTravelOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-720v-80q0-33 23.5-56.5T360-880h240q33 0 56.5 23.5T680-800v80h120q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h120Zm80 0h240v-80H360v80ZM160-280h640v-120H160v120Z" />
  </svg>
)
