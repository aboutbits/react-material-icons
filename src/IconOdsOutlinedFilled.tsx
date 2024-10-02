import React from 'react'
import { IconProps } from './types'

export const IconOdsOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-360h80q17 0 28.5-11.5T360-400v-160q0-17-11.5-28.5T320-600h-80q-17 0-28.5 11.5T200-560v160q0 17 11.5 28.5T240-360Zm20-60v-120h40v120h-40Zm140 60h120q17 0 28.5-11.5T560-400v-160q0-17-11.5-28.5T520-600H400v240Zm60-60v-120h40v120h-40Zm140 60h120q17 0 28.5-11.5T760-400v-60q0-17-11.5-31.5T720-506h-60v-34h100v-60H640q-17 0-28.5 11.5T600-560v60q0 17 11.5 30.5T640-456h60v36H600v60ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)
