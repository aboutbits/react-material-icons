import React from 'react'
import { IconProps } from './types'

const IconArtTrackOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm40-160h320L376-500l-76 100-56-74-84 114Zm520 160v-560h80v560h-80Zm160 0v-560h80v560h-80Z" />
  </svg>
)

export { IconArtTrackOutlinedFilled as default }
