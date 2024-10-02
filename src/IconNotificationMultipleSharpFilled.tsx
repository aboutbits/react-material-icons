import React from 'react'
import { IconProps } from './types'

export const IconNotificationMultipleSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-80v-600h80v520h600v80H40Zm160-160v-468l360-212 80 47-352 207 272 160 300-178 60 36v408H200Zm354-320L442-672l56-56 56 56 142-142 56 56-198 198Z" />
  </svg>
)
