import React from 'react'
import { IconProps } from './types'

const IconVariableAddRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640v40q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600H200v240h320q17 0 28.5 11.5T560-320q0 17-11.5 28.5T520-280H160Zm40-80v-240 240Zm560 80h-80q-17 0-28.5-11.5T640-320q0-17 11.5-28.5T680-360h80v-80q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v80h80q17 0 28.5 11.5T960-320q0 17-11.5 28.5T920-280h-80v80q0 17-11.5 28.5T800-160q-17 0-28.5-11.5T760-200v-80Z" />
  </svg>
)

export { IconVariableAddRounded as default }
