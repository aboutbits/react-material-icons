import React from 'react'
import { IconProps } from './types.js'

export const IconFolderEyeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h320l80 80h400v329q-51-42-112.5-65.5T640-480q-143 0-247.5 94T252-160H80ZM640-40q-91 0-168-48T360-220q35-84 112-132t168-48q91 0 168 48t112 132q-35 84-112 132T640-40Zm0-80q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm0-40q-25 0-42.5-17.5T580-220q0-25 17.5-42.5T640-280q25 0 42.5 17.5T700-220q0 25-17.5 42.5T640-160Z" />
  </svg>
)
