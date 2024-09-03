import React from 'react'
import { IconProps } from './types'

const IconNestCamIndoorRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-520q-33 0-56.5-23.5T400-600q0-33 23.5-56.5T480-680q33 0 56.5 23.5T560-600q0 33-23.5 56.5T480-520ZM280-80q0-33 23.5-56.5T360-160h80q0-63-30.5-117T326-366q-60-39-93-101t-33-133q0-117 81.5-198.5T480-880q117 0 198.5 81.5T760-600q0 72-34 134t-94 101q-53 34-82.5 88T520-160h80q33 0 56.5 23.5T680-80H280Zm200-320q83 0 141.5-58.5T680-600q0-83-58.5-141.5T480-800q-83 0-141.5 58.5T280-600q0 83 58.5 141.5T480-400Z" />
  </svg>
)

export { IconNestCamIndoorRounded as default }
