import React from 'react'
import { IconProps } from './types.js'

export const IconCheckSmallRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m400-416 236-236q11-11 28-11t28 11q11 11 11 28t-11 28L428-332q-12 12-28 12t-28-12L268-436q-11-11-11-28t11-28q11-11 28-11t28 11l76 76Z" />
  </svg>
)
