import React from 'react'
import { IconProps } from './types'

export const IconWallpaperSlideshowOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-640q-17 0-28.5-11.5T640-680q0-17 11.5-28.5T680-720q17 0 28.5 11.5T720-680q0 17-11.5 28.5T680-640ZM360-400l108-140 62 80 92-120 138 180H360ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm80-505v-215q0-33 23.5-56.5T320-880h200v80H320v215h-80Zm80 345q-33 0-56.5-23.5T240-320v-185h80v185h200v80H320Zm280 0v-80h200v-185h80v185q0 33-23.5 56.5T800-240H600Zm200-345v-215H600v-80h200q33 0 56.5 23.5T880-800v215h-80Z" />
  </svg>
)
