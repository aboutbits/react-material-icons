import React from 'react'
import { IconProps } from './types'

export const IconIceSkatingOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-80h160v-80H120v-600h360v180q0 27 16.5 49t42.5 29l105 29q51 14 83.5 56.5T760-400v160H640v80h80q50 0 85-35t35-85h80q0 83-58.5 141.5T720-80H80Zm120-240h480v-80q0-27-16.5-47.5T621-476l-105-30q-36-11-63-35.5T412-600h-72q-8 0-14-6t-6-14q0-8 6-14t14-6h64q-2-12-2.5-20t-1.5-20h-60q-8 0-14-6t-6-14q0-8 6-14t14-6h60v-40H200v440Zm120 160h240v-80H320v80ZM200-320Z" />
  </svg>
)
