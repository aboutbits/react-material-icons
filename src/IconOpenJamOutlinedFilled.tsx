import React from 'react'
import { IconProps } from './types'

const IconOpenJamOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-80h280v-288l64 64 56-56-160-160-160 160 56 56 64-64v168H160q-33 0-56.5-23.5T80-400v-360q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320H600v120h120v80H240Z" />
  </svg>
)

export { IconOpenJamOutlinedFilled as default }
