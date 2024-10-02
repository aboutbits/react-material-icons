import React from 'react'
import { IconProps } from './types'

export const IconHdrOnSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-360v-240h170l30 30v96l-30 30h-6l36 84h-60l-36-80h-44v80h-60Zm60-140h80v-40h-80v40ZM120-360v-240h60v80h80v-80h60v240h-60v-100h-80v100h-60Zm260 0v-240h170l30 30v180l-30 30H380Zm60-60h80v-120h-80v120Z" />
  </svg>
)
