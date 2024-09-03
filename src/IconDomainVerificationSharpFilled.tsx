import React from 'react'
import { IconProps } from './types'

const IconDomainVerificationSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m438-298 226-226-58-58-168 168-84-84-58 58 142 142ZM160-640h640v-80H160v80ZM80-160v-640h800v640H80Z" />
  </svg>
)

export { IconDomainVerificationSharpFilled as default }
