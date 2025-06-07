import React from 'react'
import { IconProps } from './types.js'

export const IconWorkHistorySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-200v-440 440-15 15Zm-80 80v-600h240v-160h320v160h240v251q-18-13-38.5-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H80Zm320-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm20-208v-112h-40v128l86 86 28-28-74-74Z" />
  </svg>
)
