import React from 'react'
import { IconProps } from './types'

export const IconHlsOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m713-360-80-80h47v20h80v-40H620v-140h200v80h-60v-20h-80v40h140v140H713Zm-593 0v-240h60v80h80v-80h60v240h-60v-100h-80v100h-60ZM791-56 56-791l56-57 735 736-56 56ZM400-360v-143l60 60v23h24l60 60H400Z" />
  </svg>
)
