import React from 'react'
import { IconProps } from './types'

const IconNetworkWifi3BarLockedOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120 0-600q96-98 220-149t260-51q137 0 261 51t219 149L859-499q-22-10-45-15t-48-6l78-78q-78-59-170.5-90.5T480-720q-101 0-193.5 31.5T116-598l116 116q53-38 116-59.5T480-563q56 0 108 14.5t98 40.5q-73 23-119.5 85.5T520-279q0 26 5 50.5t16 47.5l-61 61Zm200 0q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Z" />
  </svg>
)

export { IconNetworkWifi3BarLockedOutlined as default }