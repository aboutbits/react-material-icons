import React from 'react'
import { IconProps } from './types'

export const IconDomainVerificationOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-480h640v-80H160v80Zm278 342 226-226-58-58-168 168-84-84-58 58 142 142Z" />
  </svg>
)
