import React from 'react'
import { IconProps } from './types'

const IconNextWeekRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm88 300-76 76q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L468-552q-11-11-28-11t-28 11q-11 11-11 28t11 28l76 76Z" />
  </svg>
)

export { IconNextWeekRoundedFilled as default }
