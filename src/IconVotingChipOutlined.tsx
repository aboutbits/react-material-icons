import React from 'react'
import { IconProps } from './types'

export const IconVotingChipOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200H320Zm0-80h320q83 0 141.5-58.5T840-480q0-83-58.5-141.5T640-680H320q-83 0-141.5 58.5T120-480q0 83 58.5 141.5T320-280Zm10-80h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Zm290 0h60v-240H560v60h60v180ZM480-480Z" />
  </svg>
)
