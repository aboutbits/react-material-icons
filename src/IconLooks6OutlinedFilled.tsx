import React from 'react'
import { IconProps } from './types'

const IconLooks6OutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-280h80q33 0 56.5-23.5T600-360v-80q0-33-23.5-56.5T520-520h-80v-80h120v-80H440q-33 0-56.5 23.5T360-600v240q0 33 23.5 56.5T440-280Zm0-160h80v80h-80v-80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)

export { IconLooks6OutlinedFilled as default }
