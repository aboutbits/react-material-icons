import React from 'react'
import { IconProps } from './types'

const IconMarkChatReadOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M694-160 553-302l56-56 85 85 170-170 56 57-226 226ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v280H480v280H240L80-80Z" />
  </svg>
)

export { IconMarkChatReadOutlinedFilled as default }
