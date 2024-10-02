import React from 'react'
import { IconProps } from './types'

export const IconAlignStartRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-800q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H120Zm200 240q-17 0-28.5-11.5T280-600v-40q0-17 11.5-28.5T320-680h320q17 0 28.5 11.5T680-640v40q0 17-11.5 28.5T640-560H320Zm0 240q-17 0-28.5-11.5T280-360v-40q0-17 11.5-28.5T320-440h320q17 0 28.5 11.5T680-400v40q0 17-11.5 28.5T640-320H320Z" />
  </svg>
)
