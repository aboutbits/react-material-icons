import React from 'react'
import { IconProps } from './types.js'

export const IconHevcOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-360v-240h60v80h40v-80h60v240h-60v-100h-40v100h-60Zm200 0v-240h140v60h-80v20h80v60h-80v40h80v60H320Zm200 0-40-240h60l30 180 30-180h60l-40 240H520Zm200 0q-17 0-28.5-11.5T680-400v-160q0-17 11.5-28.5T720-600h80q17 0 28.5 11.5T840-560v40h-60v-20h-40v120h40v-20h60v40q0 17-11.5 28.5T800-360h-80Z" />
  </svg>
)
