import React from 'react'
import { IconProps } from './types'

const IconNetworkWifi2BarLockedRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-720q-99 0-192 31t-172 91l172 172q44-26 92.5-40t99.5-14q18 0 36 2t35 6q17 4 21.5 20.5T566-421q-23 31-34.5 67.5T520-279q0 11 2 21t4 21 4 21q2 10 2 21 0 20-15 31.5T481-152q-14 0-29-5.5T423-177L61-539q-11-11-17.5-26T37-596q0-17 7.5-33T65-656q86-75 193.5-109.5T480-800q114 0 221.5 34.5T895-656q13 11 20.5 27t7.5 33q0 16-6.5 31T899-539l-27 26q-12 11-28.5 11.5T815-513q-12-12-12-29t12-28l29-28q-79-60-172-91t-192-31Zm200 600q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Z" />
  </svg>
)

export { IconNetworkWifi2BarLockedRounded as default }
