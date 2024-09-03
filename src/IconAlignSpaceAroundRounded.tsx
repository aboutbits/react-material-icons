import React from 'react'
import { IconProps } from './types'

const IconAlignSpaceAroundRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-240q-17 0-28.5-11.5T280-280v-40q0-17 11.5-28.5T320-360h320q17 0 28.5 11.5T680-320v40q0 17-11.5 28.5T640-240H320Zm0-360q-17 0-28.5-11.5T280-640v-40q0-17 11.5-28.5T320-720h320q17 0 28.5 11.5T680-680v40q0 17-11.5 28.5T640-600H320ZM120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm0-720q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H120Z" />
  </svg>
)

export { IconAlignSpaceAroundRounded as default }