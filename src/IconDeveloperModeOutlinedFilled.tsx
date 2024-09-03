import React from 'react'
import { IconProps } from './types'

const IconDeveloperModeOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M344-296 160-480l184-184 56 58-126 126 126 126-56 58Zm-144 16h80v40h400v-40h80v160q0 33-23.5 56.5T680-40H280q-33 0-56.5-23.5T200-120v-160Zm80-400h-80v-160q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160h-80v-40H280v40Zm336 384-56-58 126-126-126-126 56-58 184 184-184 184Z" />
  </svg>
)

export { IconDeveloperModeOutlinedFilled as default }
