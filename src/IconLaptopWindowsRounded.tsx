import React from 'react'
import { IconProps } from './types'

const IconLaptopWindowsRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-160q-17 0-28.5-11.5T0-200q0-17 11.5-28.5T40-240h120v-40q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280v40h120q17 0 28.5 11.5T960-200q0 17-11.5 28.5T920-160H40Zm120-200h640v-400H160v400Zm0 0v-400 400Z" />
  </svg>
)

export { IconLaptopWindowsRounded as default }
