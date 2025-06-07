import React from 'react'
import { IconProps } from './types.js'

export const IconArtTrackSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-200H40v-560h560v560Zm80 0v-560h80v560h-80Zm160 0v-560h80v560h-80ZM160-360h320L376-500l-76 100-56-74-84 114Z" />
  </svg>
)
