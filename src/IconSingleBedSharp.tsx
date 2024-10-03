import React from 'react'
import { IconProps } from './types.js'

export const IconSingleBedSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-200h-40l-26-80h-54v-280h80v-200h480v200h80v280h-54l-26 80h-40l-26-80H306l-26 80Zm240-360h120v-120H520v120Zm-200 0h120v-120H320v120Zm-80 200h480v-120H240v120Zm480 0H240h480Z" />
  </svg>
)
