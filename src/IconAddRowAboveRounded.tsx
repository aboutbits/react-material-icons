import React from 'react'
import { IconProps } from './types'

const IconAddRowAboveRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-400v240h560v-240H200Zm0 320q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40q17 0 28.5 11.5T280-760q0 17-11.5 28.5T240-720h-40v240h560v-240h-40q-17 0-28.5-11.5T680-760q0-17 11.5-28.5T720-800h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm240-640h-40q-17 0-28.5-11.5T360-760q0-17 11.5-28.5T400-800h40v-40q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v40h40q17 0 28.5 11.5T600-760q0 17-11.5 28.5T560-720h-40v40q0 17-11.5 28.5T480-640q-17 0-28.5-11.5T440-680v-40Zm40 240Zm0 80v-80 80Zm0 0Z" />
  </svg>
)

export { IconAddRowAboveRounded as default }
