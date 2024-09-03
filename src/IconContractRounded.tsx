import React from 'react'
import { IconProps } from './types'

const IconContractRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-50 0-85-35t-35-85v-40q0-33 23.5-56.5T200-320h40v-480q0-33 23.5-56.5T320-880h440q33 0 56.5 23.5T840-800v600q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-600H320v480h280q33 0 56.5 23.5T680-240v40q0 17 11.5 28.5T720-160ZM400-600q-17 0-28.5-11.5T360-640q0-17 11.5-28.5T400-680h280q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600H400Zm0 120q-17 0-28.5-11.5T360-520q0-17 11.5-28.5T400-560h280q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480H400ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm0 0h-40 400-360Z" />
  </svg>
)

export { IconContractRounded as default }
