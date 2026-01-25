import React from 'react'
import { IconProps } from './types.js'

export const IconGif2Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280q-33 0-56.5-23.5T80-360v-240q0-33 23.5-56.5T160-680h160q33 0 56.5 23.5T400-600H160v240h160v-80h-80v-80h160v160q0 33-23.5 56.5T320-280H160Zm320 0v-400h80v400h-80Zm160 0v-400h280v80H720v80h160v80H720v160h-80Z" />
  </svg>
)
