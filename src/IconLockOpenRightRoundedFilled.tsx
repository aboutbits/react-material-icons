import React from 'react'
import { IconProps } from './types'

const IconLockOpenRightRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-280q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h280v-80q0-83 58.5-141.5T720-920q75 0 130.5 48.5T917-752q2 13-9 22.5t-28 9.5q-17 0-28-7t-16-23q-11-38-42.5-64T720-840q-50 0-85 35t-35 85v80h120q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Z" />
  </svg>
)

export { IconLockOpenRightRoundedFilled as default }
