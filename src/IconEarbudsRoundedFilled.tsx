import React from 'react'
import { IconProps } from './types.js'

export const IconEarbudsRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120q-83 0-141.5-58.5T120-320v-392q0-54 33-91t87-37q54 0 87 33t33 87q0 51-34.5 85.5T240-600h-40v280q0 50 35 85t85 35q50 0 85-35t35-85v-320q0-83 58.5-141.5T640-840q83 0 141.5 58.5T840-640v400q0 51-38.5 85.5T712-120q-51 0-81.5-34.5T600-240q0-51 34.5-85.5T720-360h40v-280q0-50-35-85t-85-35q-50 0-85 35t-35 85v320q0 83-58.5 141.5T320-120Z" />
  </svg>
)