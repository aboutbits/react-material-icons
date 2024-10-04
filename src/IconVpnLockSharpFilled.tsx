import React from 'react'
import { IconProps } from './types'

const IconVpnLockSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q32 0 61.5 4.5T600-862v182H440v120H320v80h280v160h40l76 56q39-44 61.5-98.5T800-480q0-11-1-20t-3-20h82q2 11 2 20v20q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm-40-82v-78l-80-80v-40L168-552q-3 18-5.5 36t-2.5 36q0 124 80.5 213.5T440-162Zm240-438v-200h40v-40q0-33 23.5-56.5T800-920q33 0 56.5 23.5T880-840v40h40v200H680Zm80-200h80v-40q0-17-11.5-28.5T800-880q-17 0-28.5 11.5T760-840v40Z" />
  </svg>
)

export { IconVpnLockSharpFilled as default }
