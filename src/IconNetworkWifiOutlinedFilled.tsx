import React from 'react'
import { IconProps } from './types.js'

export const IconNetworkWifiOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120 0-600q95-97 219.5-148.5T480-800q137 0 261 51t219 149L480-120ZM174-540q67-48 145-74t161-26q83 0 161 26t145 74l58-58q-79-60-172-91t-192-31q-99 0-192 31t-172 91l58 58Z" />
  </svg>
)