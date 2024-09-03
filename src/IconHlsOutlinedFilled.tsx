import React from 'react'
import { IconProps } from './types'

const IconHlsOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-360v-240h60v80h80v-80h60v240h-60v-100h-80v100h-60Zm280 0v-240h60v180h100v60H400Zm260 0q-17 0-28.5-11.5T620-400v-40h60v20h80v-40H660q-17 0-28.5-11.5T620-500v-60q0-17 11.5-28.5T660-600h120q17 0 28.5 11.5T820-560v40h-60v-20h-80v40h100q17 0 28.5 11.5T820-460v60q0 17-11.5 28.5T780-360H660Z" />
  </svg>
)

export { IconHlsOutlinedFilled as default }
