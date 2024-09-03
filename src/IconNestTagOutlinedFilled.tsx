import React from 'react'
import { IconProps } from './types'

const IconNestTagOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-117 0-198.5-81.5T200-360q0-94 55-168t145-100v-212q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v212q89 26 144.5 100T760-360q0 117-82 198.5T480-80Zm0-80q83 0 141.5-58T680-360q0-83-58.5-141.5T480-560q-84 0-142 58.5T280-360q0 84 58 142t142 58Z" />
  </svg>
)

export { IconNestTagOutlinedFilled as default }
