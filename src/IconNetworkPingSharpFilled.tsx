import React from 'react'
import { IconProps } from './types'

const IconNetworkPingSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240v-80h260L80-660l56-56 344 343 208-208q-4-9-6-18.5t-2-20.5q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29q-9 0-17.5-1.5T746-526L540-320h260v80H160Z" />
  </svg>
)

export { IconNetworkPingSharpFilled as default }
