import React from 'react'
import { IconProps } from './types.js'

export const IconOnHubDeviceOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-80h320v80H320Zm0-120-40-514q-3-35 21-60.5t59-25.5h240q35 0 59 25.5t21 60.5l-40 514H320Z" />
  </svg>
)
