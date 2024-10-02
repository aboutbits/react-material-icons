import React from 'react'
import { IconProps } from './types'

export const IconStackStarRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m600-275 71 43q6 4 11.5 0t3.5-11l-19-81 62-53q5-5 3-11t-9-7l-81-7-33-77q-2-6-9-6t-9 6l-33 77-81 7q-7 1-9 7t3 11l62 53-19 81q-2 7 3.5 11t11.5 0l71-43Zm-440-45q-33 0-56.5-23.5T80-400v-400q0-33 23.5-56.5T160-880h400q33 0 56.5 23.5T640-800v40q0 17-11.5 28.5T600-720q-17 0-28.5-11.5T560-760v-40H160v400h40q17 0 28.5 11.5T240-360q0 17-11.5 28.5T200-320h-40ZM400-80q-33 0-56.5-23.5T320-160v-400q0-33 23.5-56.5T400-640h400q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H400Zm0-80h400v-400H400v400Zm200-200Z" />
  </svg>
)
