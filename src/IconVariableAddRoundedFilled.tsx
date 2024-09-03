import React from 'react'
import { IconProps } from './types'

const IconVariableAddRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640v47q0 14-11 24t-25 9q-49-1-94 17t-80 53q-35 35-53 79.5T560-316q0 14-9.5 25T527-280H160Zm600 0h-80q-17 0-28.5-11.5T640-320q0-17 11.5-28.5T680-360h80v-80q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v80h80q17 0 28.5 11.5T960-320q0 17-11.5 28.5T920-280h-80v80q0 17-11.5 28.5T800-160q-17 0-28.5-11.5T760-200v-80Z" />
  </svg>
)

export { IconVariableAddRoundedFilled as default }
