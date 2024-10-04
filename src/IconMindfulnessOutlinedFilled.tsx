import React from 'react'
import { IconProps } from './types'

const IconMindfulnessOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80H240Zm200-320h80v-280h-80v280Zm120-60h80v-180h-80v180Zm-240-20h80v-160h-80v160Z" />
  </svg>
)

export { IconMindfulnessOutlinedFilled as default }
