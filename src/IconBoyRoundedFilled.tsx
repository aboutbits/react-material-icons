import React from 'react'
import { IconProps } from './types.js'

export const IconBoyRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-660q-29 0-49.5-20.5T410-730q0-29 20.5-49.5T480-800q29 0 49.5 20.5T550-730q0 29-20.5 49.5T480-660Zm-80 460v-160q-17 0-28.5-11.5T360-400v-140q0-33 23.5-56.5T440-620h80q33 0 56.5 23.5T600-540v140q0 17-11.5 28.5T560-360v160q0 17-11.5 28.5T520-160h-80q-17 0-28.5-11.5T400-200Z" />
  </svg>
)
