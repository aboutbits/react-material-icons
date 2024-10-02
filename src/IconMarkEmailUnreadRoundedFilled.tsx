import React from 'react'
import { IconProps } from './types'

export const IconMarkEmailUnreadRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-640q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h364q16 0 26.5 12t9.5 28q0 11 1 20.5t3 19.5q7 32 23 59.5t39 48.5l-146 92-268-168q-17-11-34.5-1T160-659q0 9 4 16.5t12 12.5l283 177q10 6 21 6t21-6l190-119q17 6 34 9t35 3q18 0 36-3t35-10q17-7 33 2t16 26v305q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)
