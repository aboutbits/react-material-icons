import React from 'react'
import { IconProps } from './types'

export const IconHdrPlusSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-260v-60h-60v-60h60v-60h60v60h60v60h-60v60h-60ZM280-480v-240h60v80h80v-80h60v240h-60v-100h-80v100h-60Zm240 0v-240h150l30 30v180l-30 30H520ZM340-340h80v-40h-80v40Zm78 140-34-80h-44v80h-60v-240h170l30 30v96l-30 30h-6l36 84h-62Zm162-340h60v-120h-60v120ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-320Z" />
  </svg>
)
