import React from 'react'
import { IconProps } from './types.js'

export const IconHlsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-360v-240h60v80h80v-80h60v240h-60v-100h-80v100h-60Zm280 0v-240h60v180h100v60H400Zm220 0v-80h60v20h80v-40H620v-140h200v80h-60v-20h-80v40h140v140H620Z" />
  </svg>
)
