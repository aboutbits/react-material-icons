import React from 'react'
import { IconProps } from './types.js'

export const IconNetworkWifiLockedRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-720q-99 0-192 31t-172 91l58 58q67-48 145-74t161-26q83 0 161 26t145 74l58-58q-79-60-172-91t-192-31Zm1 568q-14 0-29-5.5T423-177L61-539q-11-11-17.5-26T37-596q0-17 7.5-33T65-656q86-75 193.5-109.5T480-800q114 0 221.5 34.5T895-656q13 11 20.5 27t7.5 33q0 16-6.5 31T899-539l-25 25q-7 7-16.5 9t-18.5-2q-19-7-39-10t-40-3q-100 0-170 70t-70 171q0 11 2 21t4 21 4 21q2 10 2 21 0 20-15 31.5T481-152Zm199 32q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Z" />
  </svg>
)