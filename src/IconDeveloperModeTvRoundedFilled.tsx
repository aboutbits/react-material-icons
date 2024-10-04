import React from 'react'
import { IconProps } from './types.js'

export const IconDeveloperModeTvRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m192-520 76-76q11-11 11-28t-11-28q-11-11-28-11t-28 11L108-548q-12 12-12 28t12 28l104 104q11 11 28 11t28-11q11-11 11-28t-11-28l-76-76Zm576 0-76 76q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L748-652q-11-11-28-11t-28 11q-11 11-11 28t11 28l76 76ZM360-120q-17 0-28.5-11.5T320-160v-40H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360Z" />
  </svg>
)